---
layout: docs
description: "Guilded.NET supports most of the provided Guilded API features."
tags:
    - Support
    - Guilded.NET
    - API
    - Docs
---

# Quick Overview: Supported features

| Feature                  |         Guilded API          |            Guilded.NET           |
|--------------------------|:----------------------------:|:--------------------------------:|
| Chat messages            | <i class="fas fa-check"></i> | <i class="fas fa-check"></i>     |
| List items               | <i class="fas fa-slash"></i> | <i class="fas fa-slash"></i>     |
| Forum threads            | <i class="fas fa-slash"></i> | <i class="fas fa-slash"></i>     |
| Announcements            | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Media posts              | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Scheduling               | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Document                 | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Calendar events          | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Voice features           | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Streaming features       | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Profile features         | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Emote management         | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Threads                  | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Channel manipulation     | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Category manipulation    | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Group manipulation       | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Tournament features      | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Webhook manipulation     | <i class="fas fa-times"></i> | <i class="fas fa-slash"></i>[^1] |
| Flowbot manipulation     | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Member management        | <i class="fas fa-slash"></i> | <i class="fas fa-slash"></i>     |
| Role management          | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Server subscriptions     | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Team management          | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Markdown support         | <i class="fas fa-slash"></i> | <i class="fas fa-slash"></i>     |
| Content features         | <i class="fas fa-slash"></i> | <i class="fas fa-slash"></i>     |
| Buttons, dropdowns       | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| Replaying events         | <i class="fas fa-check"></i> | <i class="fas fa-slash"></i>     |
| Self-management          | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |
| File uploads             | <i class="fas fa-times"></i> | <i class="fas fa-slash"></i>[^2] |
| Commands                 | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>[^3] |
| Direct messages          | <i class="fas fa-times"></i> | <i class="fas fa-times"></i>     |

[^1]: Client API allows sending messages with Webhooks. This is supported in Guilded.NET.
[^2]: Image and video uploading is supported by client API. Guilded.NET supports uploading images and partially supports video uploads. Non-media file uploads are not available neither in API, nor in Guilded.NET.
[^3]: Slash commands are not a thing, but it is possible to use old-fashioned message commands(<q>!command arg0 arg1 arg2</q>).