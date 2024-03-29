import OpenAI from "openai";
import { OPENAI_KEY } from "./Constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY, // This is the default and can be omitted
  dangerouslyAllowBrowser : true , //Should not API call from client side
});

export default openai;
