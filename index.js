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

const maximiseBTN = document.getElementById("maximise");
const minimiseBtn = document.getElementById("minimise");
maximiseBTN.onclick = () => {
  let btnStyle = maximiseBTN.style.display;
  if (btnStyle === "" || btnStyle === "block") {
    btnStyle = "none";
  } else {
    btnStyle = "block";
  }
};
