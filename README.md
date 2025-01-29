# DeepSeek Clone - VS Code Extension

A VS Code extension that brings the power of DeepSeek's language model directly into your editor through Ollama. Chat with DeepSeek's AI model without leaving your development environment.

## About DeepSeek

DeepSeek is an advanced language model that excels in:
- Code understanding and generation
- Technical discussions
- Problem-solving
- Documentation assistance
- Code review and suggestions

This extension uses the DeepSeek-Coder model through Ollama, providing a lightweight and efficient way to interact with the AI.

## Features

- 🚀 **Integrated Chat Interface**: Chat directly within VS Code
- ⚡ **Real-time Streaming**: See responses as they're generated
- 💻 **Local Processing**: All processing happens locally through Ollama
- 🔒 **Privacy-Focused**: No data sent to external servers
- 🎯 **Developer-Centric**: Optimized for programming-related queries
- 🛠 **Simple Interface**: Clean, distraction-free chat UI

## Credits 
[Fireship.io](https://github.com/fireship-io)

Check out this video: [I built a DeepSeek R1 powered VS Code extension…
](https://www.youtube.com/watch?v=clJCDHml2cA)

## Prerequisites

Before using this extension, ensure you have:

1. **Ollama** installed on your system
   - [Download Ollama](https://ollama.ai/download)
   - Follow installation instructions for your OS

2. **DeepSeek Model** pulled in Ollama
   ```bash
   ollama pull deepseek-r1
   ```

## Installation

1. Install the extension from VS Code Marketplace
2. Ensure Ollama is running on your system
3. Make sure you've pulled the DeepSeek model as mentioned above

## Usage

1. Open VS Code
2. Press `Cmd/Ctrl + Shift + P` to open the Command Palette
3. Type "Start DeepSeek Chat" and select it
4. The chat interface will open in a new panel
5. Type your question/prompt and click "Ask" or press Enter
6. Watch as DeepSeek generates its response in real-time

### Example Use Cases

- Ask for code explanations
- Get help with debugging
- Generate code snippets
- Discuss programming concepts
- Get documentation suggestions
- Code review assistance

## Known Issues & Limitations

- Requires local installation of Ollama
- Must have the DeepSeek model pulled before use
- Performance depends on your system's capabilities
- Initial model loading might take a few seconds

## Troubleshooting

### Common Issues

1. **"Could not connect to Ollama"**
   - Ensure Ollama is running (`ollama serve`)
   - Check if Ollama is properly installed

2. **"Model not found"**
   - Run `ollama pull deepseek-r1`
   - Verify model installation with `ollama list`

3. **Slow Responses**
   - Check system resources
   - Consider closing other resource-intensive applications

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Release Notes

### 1.0.0
- Initial release
- Basic chat functionality
- Real-time streaming responses
- Error handling for common issues

## License

[MIT License](LICENSE)



## Privacy Notice

This extension processes all data locally through Ollama. No data is sent to external servers, ensuring your code and conversations remain private.

## Support

If you encounter any issues or have suggestions:
- Open an issue on [GitHub](https://github.com/joegeorge022/Deepseek-Extension/issues)
- Check the [Known Issues](#known-issues--limitations) section

---


* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)
