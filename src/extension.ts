import * as vscode from 'vscode'
import ollama from 'ollama'

export function activate(context: vscode.ExtensionContext) {
	const disposable = vscode.commands.registerCommand('deepseek-clone.startChat', () => {
		const panel = vscode.window.createWebviewPanel(
			'deepChat',
			'DeepSeek Chat',
			vscode.ViewColumn.One,
			{
				enableScripts: true
			}
		);

		panel.webview.html = getWebviewContent();
		panel.webview.onDidReceiveMessage(async (message) => {
			if (message.command === 'ask') {
				const userPrompt = message.text;
				let responseText = '';
				try {
					const streamResponse = await ollama.chat({
						model: 'deepseek-r1:latest',
						messages: [{ role: 'user', content: userPrompt }],
						stream: true
					});

					for await (const part of streamResponse) {
						responseText += part.message.content;
						panel.webview.postMessage({ 
							command: 'response', 
							text: responseText 
						});
					}
				} catch (error) {
					let errorMessage = 'Error: ';
					if (error.message?.includes('ECONNREFUSED')) {
						errorMessage += 'Could not connect to Ollama. Please make sure Ollama is installed and running.';
					} else if (error.message?.includes('model not found')) {
						errorMessage += 'Model "deepseek-r1" not found. Please run "ollama pull deepseek-r1" first.';
					} else {
						errorMessage += (error instanceof Error ? error.message : String(error));
					}
					panel.webview.postMessage({ 
						command: 'response', 
						text: errorMessage 
					});
				}
			}
		});
	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(): string {
	return /*html*/`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<style>
				body { 
					font-family: sans-serif; 
					margin: 1rem; 
				}
				#prompt { 
					width: 100%; 
					box-sizing: border-box; 
				}
				#response { 
					border: 1px solid #ccc; 
					margin-top: 1rem; 
					padding: 0.5rem; 
					min-height: 100px;
					white-space: pre-wrap;
				}
			</style>
		</head>
		<body>
			<h2>DeepSeek Chat</h2>
			<textarea id="prompt" rows="3" placeholder="Ask something..."></textarea><br />
			<button id="askBtn">Ask</button>
			<div id="response"></div>

			<script>
				const vscode = acquireVsCodeApi();
				const askBtn = document.getElementById('askBtn');
				
				askBtn.addEventListener('click', () => {
					askBtn.disabled = true;
					askBtn.textContent = 'Thinking...';
					const prompt = document.getElementById('prompt').value;
					vscode.postMessage({
						command: 'ask',
						text: prompt
					});
				});

				window.addEventListener('message', (event) => {
					const { command, text } = event.data;
					if (command === 'response') {
						document.getElementById('response').textContent = text;
						askBtn.disabled = false;
						askBtn.textContent = 'Ask';
					}
				});
			</script>
		</body>
		</html>
	`;
}

export function deactivate() {}
 