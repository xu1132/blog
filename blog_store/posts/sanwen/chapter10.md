# OpenClaw 部署教程：让你的 Mac 拥有 AI 助手 🦅

## Thursday, March 12, 2026

**一、什么是 OpenClaw？**

OpenClaw 是一个开源的 AI 助手框架，它可以运行在你的 Mac 上，帮你完成各种任务：

- 📝 文件管理和整理
- 🔍 联网搜索和信息查询
- 💬 通过飞书、Telegram 等平台与你交互
- 🛠️ 执行 shell 命令、操作 GitHub 等
- 🧠 集成多种 AI 模型（通义千问、MiniMax、GLM 等）

简单来说，它就像一个住在你电脑里的智能助手，可以随时帮你干活。

---

**二、安装步骤**

### 1. 前置要求

- macOS 10.15 或更高版本
- Node.js 18+（推荐 v22）
- 一个阿里云百炼 API key（用于 AI 模型）

### 2. 安装 OpenClaw

```bash
# 使用 npm 全局安装
npm install -g openclaw

# 验证安装
openclaw --version
```

### 3. 配置 API Key

```bash
# 进入配置向导
openclaw configure

# 或者手动编辑配置文件
# ~/.openclaw/agents/main/agent/models.json
```

在配置文件中添加你的阿里云百炼 API key：

```json
{
  "providers": {
    "bailian": {
      "baseUrl": "https://coding.dashscope.aliyuncs.com/v1",
      "apiKey": "sk-your-api-key-here",
      "api": "openai-completions"
    }
  }
}
```

### 4. 启动 Gateway

```bash
# 启动网关服务
openclaw gateway start

# 查看状态
openclaw gateway status
```

---

**三、配置飞书机器人（可选）**

如果你想通过飞书与 OpenClaw 交互：

### 1. 创建飞书应用

1. 访问 https://open.feishu.cn/app
2. 创建新应用
3. 获取 App ID 和 App Secret

### 2. 配置 OpenClaw

编辑 `~/.openclaw/openclaw.json`：

```json
{
  "channels": {
    "feishu": {
      "enabled": true,
      "appId": "cli_xxxxxxxxxxxxx",
      "appSecret": "xxxxxxxxxxxxxxxxx",
      "connectionMode": "websocket"
    }
  }
}
```

### 3. 重启网关

```bash
openclaw gateway restart
```

---

**四、常用命令**

```bash
# 查看帮助
openclaw --help

# 查看技能列表
openclaw skills list

# 安装 GitHub 技能
brew install gh
# 然后认证
gh auth login

# 联网搜索（需要配置 Tavily API）
curl -X POST https://api.tavily.com/search \
  -H "Content-Type: application/json" \
  -d '{"query": "你的搜索内容", "api_key": "tvly-your-key"}'

# 查看会话状态
openclaw status
```

---

**五、实际使用示例**

### 1. 文件操作

```
用户：帮我把桌面上的截图整理到一个文件夹里
OpenClaw：好的，我创建了一个"截屏归档"文件夹，并把所有截图都移进去了。
```

### 2. 联网搜索

```
用户：查一下今天的微博热搜
OpenClaw：（调用 Tavily API 搜索）以下是今天的微博热搜...
```

### 3. GitHub 操作

```
用户：查看我的仓库列表
OpenClaw：（调用 gh CLI）你有 15 个公开仓库，分别是...
```

---

**六、常见问题**

### Q: 安装时提示权限错误？

A: Homebrew 不能以 root 身份运行。切换到普通用户：

```bash
su your-username -c "brew install xxx"
```

### Q: 搜索功能不可用？

A: 需要配置搜索 API。有两种选择：

1. **Brave Search**（需要 API key）
   ```bash
   openclaw configure --section web
   ```

2. **Tavily API**（推荐，免费额度够用）
   - 访问 https://tavily.com 获取 API key
   - 使用 curl 直接调用 API

### Q: 如何查看日志？

```bash
openclaw logs --follow
```

---

**七、进阶配置**

### 1. 添加更多 AI 模型

在 `models.json` 中添加更多 provider：

```json
{
  "providers": {
    "bailian": {...},
    "minimax": {...},
    "glm": {...}
  }
}
```

### 2. 配置 MCP 服务

OpenClaw 支持 MCP（Model Context Protocol）来扩展能力：

```bash
# 安装 mcporter
npm install -g mcporter

# 配置 Tavily MCP
mcporter config add --transport http --scope home tavily \
  "https://mcp.tavily.com/mcp/?tavilyApiKey=your-key"
```

### 3. 自定义技能

可以在 ClawHub 上查找和安装社区技能：

```bash
npx clawhub search github
npx clawhub install <skill-name>
```

---

**八、资源链接**

- 📚 官方文档：https://docs.openclaw.ai
- 🐙 GitHub 项目：https://github.com/openclaw/openclaw
- 💬 社区 Discord：https://discord.com/invite/clawd
- 🔧 技能市场：https://clawhub.com

---

<div class="alert alert-success">
<strong>提示：</strong> OpenClaw 还在快速迭代中，建议定期更新获取最新功能。
运行 <code>openclaw update</code> 可以检查并安装更新。
</div>

---

**九、总结**

OpenClaw 是一个强大的本地 AI 助手框架，通过简单的配置就能让你的 Mac 拥有智能交互能力。无论是文件管理、信息查询还是自动化任务，它都能帮你完成。

最重要的是，它是**开源的**、**本地的**、**可定制的** —— 你的数据你做主。

如果你有任何问题，欢迎在评论区留言，或者加入官方 Discord 社区交流！

---

*最后更新：2026 年 3 月 12 日*
