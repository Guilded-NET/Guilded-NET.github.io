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
    {% include c_message.html other=embeds0 %}
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

{% capture fields1 %}
    {% include c_field.html name="Field #1" value="The value of the field" %}
    {% include c_field.html name="Field #2" value="This field is inline" inline="1" %}
    {% include c_field.html name="Field #3" value="This field is inline too" inline="1" %}
{% endcapture %}
{% capture embeds1 %}
    {% include c_embed.html title="Title" description="Description. This is not a field" fields=fields1 %}
{% endcapture %}
{% capture messages1 %}
    {% include c_message.html other=embeds1 %}
{% endcapture %}
{% include c_preview.html content=messages1 %}


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

Custom colours are allowed as well, by using [`Embed.SetColor(int rgba)`{: .language-csharp}](/references/Embed_SetColor(int)) or [`Embed.SetColor(int red, int green, int blue)`{: .language-csharp}](/references/Embed_SetColor(int_int_int)).

```csharp
Embed embed = new Embed
{
    Title = "Title",
    Description = "Description",
}.SetColor(0xFF0000);
```

### The end

There is more to custom embeds than mentioned here. [Custom embed reference page](/references/Embed) contains all of the other information necessary, such as how to set a thumbnail or an image.
