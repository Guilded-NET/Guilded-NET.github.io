---
layout: docs
description: "Embeds are generally used to display the preview of certain content or a link, but they can be used as content itself."
preview: true
tags:
    - Embeds
    - Rich Content
    - Guilded.NET
    - Docs
    - C#
---

# How to use Embeds

Embeds are generally used to display the preview of certain content or a link, but they can be used as content itself.

## Content and Custom embeds

There are 2 kinds of embeds, content embeds and custom embeds(may also be called rich embeds).

Content embeds are used to automatically generate a preview of a link. If you add a hyperlink, the Guilded client will pull OpenGraph metadata from the linked website and display the contents according to the fetch data. Content embeds may differ in design, unlike custom embeds(website embeds vs share feature vs server invite).

Custom embeds are similar to content website embeds in terms of how they look, but they are fully customizable, meaning, you can set custom colour of the side border, add fields you want, etc. Custom embeds do not require a hyperlink to be added and it can be added freely to a message. They are generally used for webhooks to display events/new content or for bots to have a fancy output that is more understandable from a glance. Content embeds cannot look like shared messages or team invites as of now.

## Creating a custom embed

### Basics

To create an embed, you need to create a new instance of [Embed](/references/Embed). From that point, you can use embed constructor parameters, object initializers or methods to generate content for the embed. As an example:

```csharp
using Guilded.NET.Base.Embeds;
```
{: data-insert="0"}

```csharp
Embed embed = new Embed
{
    Title = "This is the title of the embed",
    Description = "Description",
    Footer = new EmbedFooter("The footer text of the embed")
};
```

And now we should theoretically be able to send the embed. However, at this time, that's not possible. There are kind of two ways to send embeds. One is to use unofficially supported rich text markup and the other is to use webhooks. Here, we'll use webhooks, since Guilded.NET does not suppport rich text markup:

```csharp
await client.CreateHookMessageAsync(webhookId, webhookToken, embed).ConfigureAwait(false);
```

This produces:

{% capture embeds0 %}
    {% include c_embed.html title="This is the title of the embed" description="Description" footer_text="The footer of the embed" %}
{% endcapture %}
{% capture messages0 %}
    {% include c_message.html other=embeds0 %}
{% endcapture %}
{% include c_preview.html content=messages0 %}

Due to design choices, embeds don't need to be built. This may be subject to change.

You can check for full and quick overview of all embed features in [Embed reference page](/references/Embed). This document will only help understand some of the features from this point.

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

It is not mandatory to have either the name or the value of the field. Empty string can be passed to either of them and it will not be visible in the embed. Although passing a null will result in an error by Guilded.NET (because Guilded API does it as well).

### Authors and Footers

Embeds have more than descriptions, titles and fields. They can also have an author, which appears at the top, and a footer, which appears at the bottom.

```csharp
using System;

using Guilded.NET.Base.Chat;
using Guilded.NET.Base.Embeds;
```
{: data-insert="0"}

```csharp
Embed embed = new Embed { Description = "The description of the embed." }
    .SetAuthor("The name of the author", iconUrl, new Uri("https://guilded.gg/"))
    .SetFooter("The footer text", iconUrl);
```

As the name suggests, authors are supposed to represent who made the content. But it isn't restricted to that. The URL of the author can be used to link either the content or the author's profile.

Footers provide mostly side information, such as like, comment count, where it was posted, or it could be a replacement for embed author.

Both footer and an author can have an optional icon, although footer cannot hold a URL. But footers can hold timestamps... Well, sort of. Timestamp's data isn't defined inside a footer, but it is displayed in the footer.

```csharp
Embed embed = new Embed { Description = "This embed has a timestamp at the bottom" }
    .SetTimestamp();
```

If no argument is passed to [`SetTimestamp`](/references/Embed_SetTimestamp(DateTime)), UTC current time will be used instead.

### Setting side colour

Custom embeds use [Color struct](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color) to set the colour of the embed. Alpha channel of the embed colour is filtered out, so the transparency of the colour is ignored(if you use [Color.Transparent](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color.transparent), it will be rendered as white instead). Colour is displayed at the left side of the embed and doesn't change any other parts of it.

An example using [Color.Red](https://docs.microsoft.com/en-us/dotnet/api/system.drawing.color.red) as embed colour:

```csharp
using System;
using System.Drawing;

using Guilded.NET.Base.Chat;
using Guilded.NET.Base.Embeds;
```
{: data-insert="1"}

```csharp
Embed embed = new Embed
{
    Title = "Title",
    Description = "Description",
    Color = Color.Red
};
```
{: data-insert="4"}

Colours are not restricted to pre-defined ones. You can create custom colours using [`Embed.SetColor(int rgba)`{: .language-csharp}](/references/Embed_SetColor(int)), [`Embed.SetColor(int red, int green, int blue)`{: .language-csharp}](/references/Embed_SetColor(int_int_int)) or through other means.

### The end

There is more to custom embeds than mentioned here. [Custom embed reference page](/references/Embed) contains all of the other information necessary, such as how to set a thumbnail or an image. It is recommended to check it out if you want to work with embeds.