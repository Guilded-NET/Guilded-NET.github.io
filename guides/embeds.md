---
title: Making embeds
layout: docs
preview: true
---

# How to use: Embeds

Embeds are generally used to display the preview of certain content or a link, but they can be used as content itself.

## Content and Custom embeds

There are 2 kinds of embeds, [content embeds](/references/ContentEmbed) and [custom embeds](/references/ChatEmbed)(may also be called rich embeds).

Content embeds are used to automatically generate a preview of a link. If, let's say you give content embed to fetch your website, then it will pull metadata and OpenGraph metadata from your website and hands out the data to Guilded client, which does whatever it wants to do with the data(display it or do anything else). Content embed nodes are generally only found in documents, forum posts, forum replies and alike, but not messages(they still get displayed below if you have a hyperlink in your message). Content embeds may differ in design, unlike custom embeds(website embeds vs share feature vs server invite).

Custom embeds are similar to content website embeds in terms of how they look, but they are fully customizable, meaning, you can set custom colour of the side border, add fields you want, etc. They are generally mostly used for webhooks to display events/new content or for bots to have a fancy output that is more understandable from a glance. Content embeds cannot look like shared messages or team invites as of now.

## Creating a content embed

### Basics

Creating a content embed is as simple as giving it a link and posting it:

```csharp
// At the very top of the file
using Guilded.NET.Base.Chat;
```
{: data-insert="1"}

```csharp
ContentEmbed embed = new ContentEmbed("https://guilded.gg/");
await client.CreateForumThreadAsync(channelId, "Title", embed);
```

This will post the embed with the URL we gave it, which will then be displayed by the Guilded client automatically.

There isn't much to content embeds other than that.

## Creating a custom embed

### Basics

With Guilded.NET, there are several ways to create custom embeds. One of them is to use constructors:

```csharp
// At the top of the file
using Guilded.NET.Base.Embeds;
```
{: data-insert="1"}

```csharp
Embed embed = new Embed("The title of the embed", "The description/contents of it", "Footer text at the bottom");
```

You can also use it through object initializer/by setting embed's properties:

```csharp
Embed embed = new Embed
{
    Title = "This is the title of the embed",
    Description = "Description",
    Footer = new EmbedFooter("The footer text of the embed")
};
```

... Or with methods:

```csharp
Embed embed = new Embed()
    .SetTitle("Title here")
    .SetDescription("Description here")
    .AddField("New field's title", "New field's description");
```

These can be generally combined and does not necessarily be a style of how you use embeds.

> Full reference of every property, constructor and method can be found [here](/references/Embed).
{: .note}

And then you can send the embed by creating a message content wrapped around it:

```csharp
// At the very top of the file
using Guilded.NET.Base.Chat;
using Guilded.NET.Base.Embeds;
```
{: data-insert="1"}

```csharp
await client.CreateMessageAsync(channelId, new MessageContent(embed));
// OR
await client.CreateMessageAsync(channelId, new ChatEmbed(embed));
```

{% capture embeds0 %}
    {% include c_embed.html title="This is the title of the embed" description="Description" footer_text="The footer of the embed" %}
{% endcapture %}
{% capture messages0 %}
    {% include c_message.html content=embeds0 %}
{% endcapture %}
{% include c_preview.html content=messages0 %}

### Fields

Fields are pretty simple. They also have a title(name) and a description(value) just like embeds, but there can be multiple of them and they can be optionally inline. To make a field inline, add `true` as a third argument.

```csharp
Embed embed = new Embed { Title = "Title", Description = "Description. This is not a field." }
    .AddField("Field #1", "The value of the field")
    .AddField("Field #2", "This field is inline", true)
    .AddField("Field #3", "This field is inline too!", true);
```

<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://raw.githubusercontent.com/Guilded-NET/Guilded.NET/early-access/assets/Icon.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Guilded.NET Bot</span>
                <span class="preview-timestamp">9:55pm</span>
                <span class="preview-badge">BOT</span>
            </div>
            <div class="preview-message">
                <div class="gembed">
                    <div class="gembed-inner">
                        <div class="gembed-wrapper">
                            <div class="gembed-body">
                                <div class="gembed-title"><a>Title</a></div>
                                <div class="gembed-description"><a>Description. This is not a field.</a></div>
                                <div class="gembed-fields">
                                    <div class="gembed-field gembed-field">
                                        <div class="gembed-field-title">
                                            <a>Field #1</a>
                                        </div>
                                        <div class="gembed-field-body">
                                            <a>The value of the field</a>
                                        </div>
                                    </div>
                                    <div class="gembed-field gembed-field-inline">
                                        <div class="gembed-field-title">
                                            <a>Field #2</a>
                                        </div>
                                        <div class="gembed-field-body">
                                            <a>This field is inline</a>
                                        </div>
                                    </div>
                                    <div class="gembed-field gembed-field-inline">
                                        <div class="gembed-field-title">
                                            <a>Field #3</a>
                                        </div>
                                        <div class="gembed-field-body">
                                            <a>This field is inline too!</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Authors and Footers

Embeds have more than descriptions, titles and fields. They can also have an author, which appears at the top, and a footer, which appears at the bottom. Both authors and footers have a text and an icon, but author can also hold a hyperlink in its name.

```csharp
// At the very top of the file
using System;

using Guilded.NET.Base.Chat;
using Guilded.NET.Base.Embeds;
```
{: data-insert="1"}

```csharp
Embed embed = new Embed { Description = "The description of the embed." }
    .SetAuthor("The name of the author", iconUrl, new Uri("https://guilded.gg/"))
    .SetFooter("The footer text", iconUrl);
```

<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://raw.githubusercontent.com/Guilded-NET/Guilded.NET/early-access/assets/Icon.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Guilded.NET Bot</span>
                <span class="preview-timestamp">9:55pm</span>
                <span class="preview-badge">BOT</span>
            </div>
            <div class="preview-message">
                <div class="gembed">
                    <div class="gembed-inner">
                        <div class="gembed-author">
                            <div class="gembed-author-icon">
                                <img class="gembed-img" src="https://raw.githubusercontent.com/Guilded-NET/Guilded.NET/early-access/assets/Icon.png"/>
                            </div>
                            <div class="gembed-author-text">
                                <a href="https://www.guilded.gg/">The name of the author</a>
                            </div>
                        </div>
                        <div class="gembed-wrapper">
                            <div class="gembed-body">
                                <div class="gembed-description"><a>The description of the embed</a></div>
                            </div>
                        </div>
                        <div class="gembed-footer">
                            <div class="gembed-footer-icon">
                                <img class="gembed-img" src="https://raw.githubusercontent.com/Guilded-NET/Guilded.NET/early-access/assets/Icon.png"/>
                            </div>
                            <div class="gembed-footer-text">
                                <a>The footer text</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Setting side colour

Custom embeds use [Color struct](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color) for colour of the left border. Alpha channel of the embed colour is filtered out, so the transparency of the colour is ignored(if you use [Color.Transparent](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color.transparent), it will be rendered as black instead).

You can use built-in colours as well, such as [Color.Red](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color.red), which will be rendered as defined:

```csharp
// At the very top of the file
using System;
using System.Drawing;

using Guilded.NET.Base.Chat;
using Guilded.NET.Base.Embeds;
```
{: data-insert="2"}

```csharp
Embed embed = new Embed
{
    Title = "Title",
    Description = "Description",
    Color = Color.Red
};
```
{: data-insert="4"}

Custom colours are allowed as well, by using [`Embed.WithColor(int rgba)`{: .language-csharp}](/references/Embed_WithColor(int)) or [`Embed.WithColor(int red, int green, int blue)`{: .language-csharp}](/references/Embed_WithColor(int_int_int)).

```csharp
Embed embed = new Embed
{
    Title = "Title",
    Description = "Description",
}.SetColor(0xFF0000);
```
{: data-insert="4"}

<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://raw.githubusercontent.com/Guilded-NET/Guilded.NET/early-access/assets/Icon.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Guilded.NET Bot</span>
                <span class="preview-timestamp">9:55pm</span>
                <span class="preview-badge">BOT</span>
            </div>
            <div class="preview-message">
                <div class="gembed">
                    <div class="gembed-inner" style="border-left-color: red;">
                        <div class="gembed-wrapper">
                            <div class="gembed-body">
                                <div class="gembed-title"><a>Title</a></div>
                                <div class="gembed-description"><a>Description</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### The end

There is more to custom embeds than mentioned here. [Custom embed reference page](/references/Embed) contains all of the other information necessary, such as how to set a thumbnail or an image.
