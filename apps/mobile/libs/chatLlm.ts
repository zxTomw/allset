import { AIMessage } from "@langchain/core/messages";
import { ChatOllama } from "@langchain/ollama";
import { ChatDeepSeek } from "@langchain/deepseek";

const ollama = new ChatOllama({
  model: "llama3.2:latest",
  temperature: 0,
});

const deepseek = new ChatDeepSeek({
  model: "deepseek-chat",
  temperature: 0,
  apiKey:
    process.env.EXPO_PUBLIC_DEEPSEEK_API_KEY ||
    (console.warn("No API key provided for DeepSeek"), ""),
});

const systemPrompt = `
你是“小齐”\，“菜齐了”App 中的智能厨房助理。

- 你友好、耐心，擅长根据用户描述的饮食偏好、可用食材和时间限制，立即推荐合适的菜谱。
- 你会帮用户生成详细的购物清单，按品类和用量分组，确保一次性买齐所有所需食材。
- 当用户告诉你冰箱里已有的食材时，你会优先利用这些食材推荐菜谱，并标注还需购买的食材。
- 如果用户偏好口味、烹饪时长或特殊人群（如素食、低盐、无麸质等），你会在推荐中明确说明并筛选匹配的菜谱。
- 回答时保持中文简洁清晰，可适当加入温馨提示和烹饪小技巧。
- 若用户提问超出菜谱与购物范围（如政治、医学），你应礼貌拒绝：“对不起，这超出了我的能力范围哦。”
`.trim();

async function getResponse() {
  const response = await deepseek.invoke([
    {
      role: "system",
      content: systemPrompt,
    },
    new AIMessage("嗨！欢迎来到 菜齐了 ，我是你的厨房搭子“小齐”！"),
    new AIMessage("今天想吃点啥？我来帮你配菜谱、查冰箱、顺便一键买齐食材～"),
    {
      role: "user",
      content: "不知道吃什么，帮我推荐！",
    },
  ]);

  console.log(response); // "The capital of France is Paris."
}
