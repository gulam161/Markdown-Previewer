document.addEventListener("DOMContentLoaded", () => {
  const editor = document.getElementById("editor");
  const preview = document.getElementById("preview");
  // Default markdown content
  const defaultMarkdown = `# Heading 1
  ## Sub Heading 2
  [Link to Google](https://www.google.com)
  Inline code: \`console.log('Hello, World!')\`
  \`\`\`
  // Code block
  function add(a, b) {
    return a + b;
  }
  \`\`\`
  - List item 1
  - List item 2
  > Blockquote: This is a blockquote
  ![Markdown Logo](https://markdown-here.com/img/icon256.png)
  **By - <i class="fa-brands fa-glide-g fa-fade"></i> murtuza**
  `;

  // Render the default markdown on page load
  editor.value = defaultMarkdown;
  updatePreview();

  // Update the preview as the user types in the editor
  editor.addEventListener("input", updatePreview);

  // Function to update the preview
  function updatePreview() {
    const markdown = editor.value;
    const html = marked(markdown);
    preview.innerHTML = html;
  }
});

const min_maxBtn = document.getElementById("min-max");
const maxBtn = document.getElementById("maximise");
const miniBtn = document.getElementById("minimise");
const editor = document.getElementById("editor");

min_maxBtn.onclick = () => {
  if (maxBtn.style.display === "block" || miniBtn.style.display === "none") {
    maxBtn.style.display = "none";
    miniBtn.style.display = "block";
    editor.style.height = "100vh";
    box.style.display = "none";
    miniBtn.onclick = () => {
      if (editor.style.height === "100vh" && box.style.display === "none") {
        miniBtn.style.display = "block";
        editor.style.height = "30vh";
      }
    };
  } else {
    maxBtn.style.display = "block";
    miniBtn.style.display = "none";
    box.style.display = "block";
  }
};

const min_maxBtn2 = document.getElementById("min-max2");
const maxBtn2 = document.getElementById("maximise2");
const miniBtn2 = document.getElementById("minimise2");
const box = document.getElementById("box");
const text_editor = document.getElementById("text-editor");

min_maxBtn2.onclick = () => {
  if (maxBtn2.style.display === "block" || miniBtn2.style.display === "none") {
    maxBtn2.style.display = "none";
    miniBtn2.style.display = "block";
    box.style.height = "100vh";
    text_editor.style.display = "none";
    miniBtn2.onclick = () => {
      if (box.style.height === "100vh" && box.style.display === "none") {
        miniBtn2.style.display = "block";
        box.style.height = "70vh";
      }
    };
  } else {
    maxBtn2.style.display = "block";
    miniBtn2.style.display = "none";
    text_editor.style.display = "block";
  }
};
