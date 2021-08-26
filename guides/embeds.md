---
title: Making embeds
layout: docs
preview: true
---

# How to use: Embeds

Embeds are generally used to display the preview of certain content or a link, but they can be used as content itself that doesn't preview anything.

## Content and Custom embeds

There are 2 kinds of embeds, [content embeds](/references/ContentEmbed) and [custom/rich embeds](/references/ChatEmbed).

Content embeds are used to automatically generate a preview of a link. If let's say you give content embed to fetch your website, it will pull metadata and OpenGraph metadata from your website and hands the data out to Guilded client, which does whatever it wants to do with the data(display it or do something else with it). Content embeds are generally only found in documents, forum posts, forum replies and alike. Messages do not contain content embed nodes, although they are still displayed after any hyperlink. Content embeds can look like shared message as well, if its URL is from Guilded, or even like a team invite.

Custom embeds are similar to content embeds in terms of how they look, but they are fully customizable, meaning, you can set custom colour of the side border, add fields you want, etc. They are generally mostly used for webhooks to display events/new content or for bots to have a fancy output that is more understandable from a glance. Content embeds cannot look like shared messages or team invites as of now.

## Creating a content embed

### *Required namespaces*

| Namespace          | Description                                                   |
|--------------------|---------------------------------------------------------------|
| Guilded.NET.Chat   | [ContentEmbed](/references/ContentEmbed)                      |
| System             | [Uri](https://docs.microsoft.com/en-us/dotnet/api/system.uri) |

```cs
using System;
using Guilded.NET.Chat;
```

### Basics

Creating a content embed is as simple as giving it a link and posting it:

```cs
ContentEmbed embed = new ContentEmbed("https://guilded.gg/");
await client.CreateMessageAsync(channelId, embed);
```
{: .line-numbers}

This will post the embed with the URL we gave it, which will then be displayed by the Guilded client automatically.

## Creating a custom embed

### *Required namespaces*

| Namespace          | Description                                                                        |
|--------------------|------------------------------------------------------------------------------------|
| Guilded.NET.Chat   | [MessageContent](/references/MessageContent) or [ChatEmbed](/references/ChatEmbed) |
| Guilded.NET.Embeds | [Embed](/references/Embed)                                                         |
| System             | [Uri](https://docs.microsoft.com/en-us/dotnet/api/system.uri)                      |
| System.Drawing     | [Color](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color)          |

```cs
using System;
using System.Drawing;
using Guilded.NET.Chat;
using Guilded.NET.Embeds;
```

### Basics

With Guilded.NET, there are several ways to create custom embeds. One of them is to use constructors:

```cs
Embed embed = new Embed("The title of the embed", "The description/contents of it", "Footer text at the bottom");
```
{: .line-numbers}

You can also use it through object initializer/by setting embed's properties:

```cs
Embed embed = new Embed
{
    Title = "This is the title of the embed",
    Description = "Description",
    Footer = new EmbedFooter("The bottom/footer text of the embed")
};
```
{: .line-numbers}

... Or through building methods:

```cs
Embed embed = new Embed()
    .WithTitle("Title here")
    .WithDescription("Description here")
    .WithField("New field's title", "New field's description");
```
{: .line-numbers}

> Building methods are not fully complete and might change in the near future
{: .warning}

> Full reference of every property, constructor and method can be found [here](/references/Embed).
{: .note}

And then you can send the embed by creating a message content wrapped around it:
```cs
await client.CreateMessageAsync(channelId, new MessageContent(embed));
// OR
await client.CreateMessageAsync(channelId, new ChatEmbed(embed));
```
{: .line-numbers}
<br/>
<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Example Bot</span>
                <span class="preview-timestamp">9:55pm</span>
            </div>
            <div class="preview-message">
                <div class="gembed">
                    <div class="gembed-inner">
                        <div class="gembed-wrapper">
                            <div class="gembed-body">
                                <div class="gembed-title"><a>This is the title of the embed</a></div>
                                <div class="gembed-description"><a>Description</a></div>
                            </div>
                        </div>
                        <div class="gembed-footer">
                            <div class="gembed-footer-text">
                                <a>The footer/bottom text of the embed</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Fields

Fields are pretty simple. They also generally have a title(name) and a description(value) just like embed, but there can be multiple of them and they can be optionally inline. To make it inline, add `true` as a third argument, or `inline: true`.

```cs
Embed embed = new Embed { Title = "Title", "Description. This is not a field." }
    .WithField("Field #1", "The value of the field")
    .WithField("Field #2", "This field is inline", true)
    .WithField("Field #3", "This field is inline too!", inline: true);
```
{: .line-numbers}
<br/>
<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Example Bot</span>
                <span class="preview-timestamp">9:55pm</span>
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

Embeds have more than descriptions, titles and fields. They can also have an author, which appears at the top, and a footer, which appears at the bottom. Both author and footer have a text and an icon, but author can also hold a hyperlink in its name.

```cs
Embed embed = new Embed("The description of the embed.")
    .WithAuthor("The name of the author", iconUrl, new Uri("https://guilded.gg/"))
    .WithFooter("The footer text", iconUrl);
```
{: .line-numbers}
<br/>
<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Example Bot</span>
                <span class="preview-timestamp">9:55pm</span>
            </div>
            <div class="preview-message">
                <div class="gembed">
                    <div class="gembed-inner">
                        <div class="gembed-author">
                            <div class="gembed-author-icon">
                                <img class="gembed-img" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
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
                                <img class="gembed-img" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
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

Custom embeds use [Color struct](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color) for side-colours. Alpha channel of the colours is filtered out, meaning, it ignores the transparency you provide to the colour(if you use [Color.Transparent](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color.transparent), it will be rendered as black instead).

It works on defined colours:
```cs
Embed embed = new Embed
{
    Title = "Title",
    Description = "Description",
    Color = Color.Red
};
```
{: .line-numbers}

And custom colours:
```cs
Embed embed = new Embed
{
    Title = "Title",
    Description = "Description",
}.WithColor(0xFF0000);
```
{: .line-numbers}
<br/>
<div class="chat-preview">
    <div class="chat-preview-message">
        <div class="preview-avatar">
            <img class="preview-icon" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
        </div>
        <div class="preview-content">
            <div class="preview-header">
                <span class="preview-name">Example Bot</span>
                <span class="preview-timestamp">9:55pm</span>
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