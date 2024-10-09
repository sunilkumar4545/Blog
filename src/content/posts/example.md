---
title: Intro to HTML
description: Brief Intro to HTML
pubDate: 2024-07-02
---

# Introduction to HTML

HTML, or HyperText Markup Language, is the standard markup language used to create web pages. It serves as the backbone of web content, allowing developers to structure text, images, links, and other multimedia elements.

## History of HTML

HTML was first developed by Tim Berners-Lee in 1991. The language has undergone several revisions since its inception, with HTML5 being the latest version, introduced in 2014. HTML5 brought many new features, including support for audio and video embedding, improved parsing rules, and a more semantic structure.

## Basic Structure of an HTML Document

An HTML document is structured with a series of elements, each defined by tags. Here is a basic template for an HTML document:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Page Title</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a simple HTML document.</p>
</body>
</html>
```

### Explanation of the Structure

- `<!DOCTYPE html>`: Declares the document type and version of HTML.
- `<html>`: The root element of the HTML page.
- `<head>`: Contains meta-information about the document (like title and character set).
- `<title>`: The title of the document, shown in the browser's title bar or tab.
- `<body>`: Contains the content of the document, including headings, paragraphs, images, and more.

## Common HTML Elements

1. **Headings**: Defined using `<h1>` to `<h6>` tags.
   ```html
   <h1>This is a heading</h1>
   ```
   
2. **Paragraphs**: Defined with the `<p>` tag.
   ```html
   <p>This is a paragraph.</p>
   ```

3. **Links**: Created using the `<a>` tag.
   ```html
   <a href="https://www.example.com">Visit Example</a>
   ```

4. **Images**: Embedded using the `<img>` tag.
   ```html
   <img src="image.jpg" alt="Description of image">
   ```

5. **Lists**: Both ordered (`<ol>`) and unordered lists (`<ul>`).
   ```html
   <ul>
       <li>Item 1</li>
       <li>Item 2</li>
   </ul>
   ```

## Semantic HTML

HTML5 introduced several semantic elements that provide meaning to the web content, making it more accessible and easier to understand. Some of these elements include:

- `<header>`: Defines the header of a document or section.
- `<nav>`: Represents navigation links.
- `<article>`: Defines independent content.
- `<section>`: Represents a thematic grouping of content.
- `<footer>`: Defines the footer for a document or section.

## Conclusion

HTML is an essential skill for anyone interested in web development. Understanding its structure and elements allows you to create well-structured and accessible web pages. As you continue your learning journey, explore CSS and JavaScript to enhance your web design and functionality.

## Further Reading

- [MDN Web Docs: HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [W3Schools: HTML Tutorial](https://www.w3schools.com/html/)
