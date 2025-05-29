import parse from "html-react-parser";

export default function parseHtml(html) {
  return parse(html, {});
}
