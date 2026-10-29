# WhatsApp Web local demo

Run `npm start` in this folder, then open http://127.0.0.1:4173. Requires Node.js; no package installation is needed. You can also open index.html directly, though browser file storage behavior varies.

Features: sample conversations, simulated replies, new contacts, chat and message search, unread/group/favorites filters, emoji, file attachments up to 1 MB, downloadable attachments, starred messages, archived chats, conversation clearing, draft persistence, dark mode and mobile layout. Chats persist in localStorage on this browser origin.

This is an independent UI prototype, not a WhatsApp client. It has no WhatsApp login, real message delivery, calls, or end-to-end encryption. Messages are local demo data. Clear browser site data to reset.

## REA provenance

The requested repository was cloned to ../../work/rea at development time. It is the REA reverse-engineering toolkit, not WhatsApp source. Its reconstruction guidance was used to distinguish observed behavior from design choices. The connected REA browser capture of https://web.whatsapp.com returned the startup screen (WhatsApp, progressbar, End-to-end encrypted), evidence ev_1c1091a638e82c5b6c6a5747c93605b44603b1e03bee5e0d54def6718ed09792. The authenticated chat UI and protocol were not observed. This demo's signed-in layout and local interactions are independently implemented design choices.
