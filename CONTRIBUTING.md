# Contributing to Zymbit documentation

When filing a Pull Request against our documentation, please ensure that you follow these standards and conventions. These standards help us to maintain a consistent style and voice throughout our documentation.

## Formatting

This documentation is generated using Hugo, which uses Markdown as its raw content format.

* **ALWAYS** end text content files with the `.md` extension.
* **ALWAYS** follow the formatting conventions described in [.markdownlint.yaml](./.markdownlint.yaml).
* **ALWAYS** put the title of a page in the `title:` key of the YAML frontmatter.
* **ALWAYS** include the (potentially abridged) page title in the file name.
* **ALWAYS** use lowercase letters and use dashes instead of spaces in file names.
* **PREFER** to break a page into sections when possible. That is, have multiple `## Second level headers` on the page with `### Third level headers` where appropriate.
* **ALWAYS** put inline code, file names, and variables within `` `backticks` ``.
* Code blocks:
    - **ALWAYS** put multi-line code samples within code fences denoted by triple backticks.
    - **ALWAYS** specify the language used within a code block by putting the language name following the opening fence, e.g. ` ```yaml`.
* **ALWAYS** use inline links, e.g. `visit some [page](link.to.page)`.
* **NEVER** hard-wrap text. Allow long sentences/paragraphs to soft wrap.
* Images and downloads:
    - **ALWAYS** resize images to 2400 px or less on the longest side, and save photos as JPEG.
    - **NEVER** commit CAD models or other large downloads; attach them to the `cad-files` release. See [Images and large files](./README.md#images-and-large-files).

## Page structure

* **ALWAYS** keep page and section titles as succint as possible.
* **ALWAYS** use sentence case for section titles. Only the first word of a section title and any proper nouns should be capitalized.
* **PREFER** to use sentence case for page titles. Use sentence case by default unless there is a compelling reason to use title case.
* **ALWAYS** cover one topic per page.

## Language and style

* **ALWAYS** use American English spelling, grammar, and vocabulary.
* **ALWAYS** use [the Oxford comma](https://en.wikipedia.org/wiki/Serial_comma).
* **ALWAYS** address the reader directly with "you" being used to refer to the reader.
* **ALWAYS** assume that the reader is a developer, and write content that reflects that.
* **AVOID** gender-specific pronouns like "he/his" or "she/hers". Instead, use the *singular they* ("they/their") when it is necessary to refer to something in the third person.
* **NEVER** use the singular, first-person pronoun "I" within the documentation.

## Contibution process

* **ALWAYS** favor multiple, focused Pull Requests rather single, sprawling PRs.
* **NEVER** push directly to the main branch.
* **NEVER** merge your own Pull Request.
    - ***Exception:*** If the Pull Request is correcting a statement that has the potential to cause a customer to lose data or damage their hardware, it is acceptable to merge first and ask for a review later.
* Suggestions for edits on a PR which fix typographic, formatting, or spelling errors **DON'T** count as someone's "own" change. That is, if you fix a typo in a PR, you are still permitted to merge that pull request.
