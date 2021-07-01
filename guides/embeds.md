---
title: Making embeds
---

# Embeds

Embeds are simple and easy to use. It does not take much effort to learn to use them. In this guide, I will walk through how to use embeds in Guilded.NET.

## Getting started with embeds

We will first make a basic embed which has a description, a title and few fields.
First, we need to make a new embed. To make it, simply do `Embed embed = new Embed()`. Then, add a title to it using `.SetTitle("Title here")`
```cs
Embed embed = new Embed()
    .SetTitle("Super cool embed");
```
Now we have created an embed. To send it, simply use `Message.Generate(embed)`, and it will generate a message with that embed.
```cs
// We create an embed with a title `Super cool embed`
Embed embed = new Embed()
    .SetTitle("Super cool embed");
// We send embed we have created
await messageCreated.RespondAsync(
    Message.Generate(embed)
);
```
Launch the bot and use the command where embed was created in, and it should send this:

<div class="gembed">
    <div class="gembed-inner">
        <div class="gembed-wrapper">
            <div class="gembed-body">
                <div class="gembed-title"><a>Super cool embed</a></div>
            </div>
        </div>
    </div>
</div>

Now we also need to add a description and fields. Adding a description is very similar to adding a title. To add a description, use `.SetDescription("Description here")`.
```cs
// We create an embed with a title `Super cool embed`
Embed embed = new Embed()
    .SetTitle("Super cool embed")
    .SetDescription("Hello!");
// We send embed we have created
await messageCreated.RespondAsync(
    Message.Generate(embed)
);
```
Use the command again and it should output this:

<div class="gembed">
    <div class="gembed-inner">
        <div class="gembed-wrapper">
            <div class="gembed-body">
                <div class="gembed-title"><a>Super cool embed</a></div>
                <div class="gembed-description"><a>Hello!</a></div>
            </div>
        </div>
    </div>
</div>

Fields are a bit different. Fields require you both a title and a description, can be optionally inline and can be used multiple times.

To add a field, use `.AddField("Title of the field", "Description of a field")` to make a normal field or `.AddField("Title of the field", "Description of a field", true)` to make an inline field.

```cs
// We create an embed with a title `Super cool embed`
Embed embed = new Embed()
    .SetTitle("Super cool embed")
    .SetDescription("Hello!")
    .AddField("Inline field", "This is a cool inline field", true)
    .AddField("Another inline", "Some text here", true)
    .AddField("Not inline", "This field is not inline");
// We send embed we have created
await messageCreated.RespondAsync(
    Message.Generate(embed)
);
```

This is how your embed should look:

<div class="gembed">
    <div class="gembed-inner">
        <div class="gembed-wrapper">
            <div class="gembed-body">
                <div class="gembed-title"><a>Super cool embed</a></div>
                <div class="gembed-description"><a>Hello!</a></div>
                <div class="gembed-fields">
                    <div class="gembed-field gembed-field-inline">
                        <div class="gembed-field-title">
                            <a>Inline field</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>This is a cool inline field</a>
                        </div>
                    </div>
                    <div class="gembed-field gembed-field-inline">
                        <div class="gembed-field-title">
                            <a>Another inline</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>Some text here</a>
                        </div>
                    </div>
                    <div class="gembed-field">
                        <div class="gembed-field-title">
                            <a>Not inline</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>This field is not inline</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<blockquote class="success-block">
    <p>Now we have successfully created an embed with a description, a title and few fields.</p>
</blockquote>

## Author & Footer

We can also add footers and authors to our embed. Footer has both a text and an optional icon. To add a footer without an icon, use `.SetFooter("Text here")`. If you want to add an icon to it, use `.SetFooter("Text here", new Uri("icon_url_here"))`. We will be using a footer with our name and our icon. But to get our name and icon, we need to get message author. This can be done by using `await messageCreated.GetAuthorAsync()`.

<blockquote class="warning-block">
    <p> If you are using properties like `ProfilePicture` and `ProfileBanner`, you don't need to use `new Uri(...)`, because `ProfilePicture` and `ProfileBanner` are URI, not strings. You only need to use `new Uri(str)`.</p>
</blockquote>

```cs
// Get user which used this command
User author = await messageCreated.GetAuthorAsync();
// Create an embed
Embed embed = new Embed()
    .SetTitle("Super cool embed")
    .SetDescription("Hello!")
    .AddField("Inline field", "This is a cool inline field", true)
    .AddField("Another inline", "Some text here", true)
    .AddField("Not inline", "This field is not inline")
    .SetFooter(author.Username, author.ProfilePicture);
// Send embed we have created
await messageCreated.RespondAsync(
    Message.Generate(embed)
);
```
It should appear like this:

<div class="gembed">
    <div class="gembed-inner">
        <div class="gembed-wrapper">
            <div class="gembed-body">
                <div class="gembed-title"><a>Super cool embed</a></div>
                <div class="gembed-description"><a>Hello!</a></div>
                <div class="gembed-fields">
                    <div class="gembed-field gembed-field-inline">
                        <div class="gembed-field-title">
                            <a>Inline field</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>This is a cool inline field</a>
                        </div>
                    </div>
                    <div class="gembed-field gembed-field-inline">
                        <div class="gembed-field-title">
                            <a>Another inline</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>Some text here</a>
                        </div>
                    </div>
                    <div class="gembed-field">
                        <div class="gembed-field-title">
                            <a>Not inline</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>This field is not inline</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gembed-footer">
            <div class="gembed-footer-icon">
                <img class="gembed-img" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
            </div>
            <div class="gembed-footer-text">
                <a>YourNameHere</a>
            </div>
        </div>
    </div>
</div>

Adding an author is also similar to adding a footer. The only difference is that we can add a link in embed's author name. Author requires a name, and you can optionally add an icon and a link. Use `.SetAuthor("Name of the author", new Uri("icon_url"), new Uri("link_here"))`.

We are going to create same author as footer, but also add a link to their profile.

```cs
// Get user which used this command
User author = await messageCreated.GetAuthorAsync();
// Create an embed
Embed embed = new Embed()
    .SetTitle("Super cool embed")
    .SetDescription("Hello!")
    .AddField("Inline field", "This is a cool inline field", true)
    .AddField("Another inline", "Some text here", true)
    .AddField("Not inline", "This field is not inline")
    .SetFooter(author.Username, author.ProfilePicture)
    .SetAuthor(
        author.Username, author.ProfilePicture,
        new Uri($"https://guilded.gg/profile/{messageCreated.AuthorId}")
    );
// Send embed we have created
await messageCreated.RespondAsync(
    Message.Generate(embed)
);
```

Output:

<div class="gembed">
    <div class="gembed-inner">
        <div class="gembed-author">
            <div class="gembed-author-icon">
                <img class="gembed-img" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
            </div>
            <div class="gembed-author-text">
                <a href="https://www.guilded.gg/profile/R40Mp0Wd?r=R40Mp0Wd">YourNameHere</a>
            </div>
        </div>
        <div class="gembed-wrapper">
            <div class="gembed-body">
                <div class="gembed-title"><a>Super cool embed</a></div>
                <div class="gembed-description"><a>Hello!</a></div>
                <div class="gembed-fields">
                    <div class="gembed-field gembed-field-inline">
                        <div class="gembed-field-title">
                            <a>Inline field</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>This is a cool inline field</a>
                        </div>
                    </div>
                    <div class="gembed-field gembed-field-inline">
                        <div class="gembed-field-title">
                            <a>Another inline</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>Some text here</a>
                        </div>
                    </div>
                    <div class="gembed-field">
                        <div class="gembed-field-title">
                            <a>Not inline</a>
                        </div>
                        <div class="gembed-field-body">
                            <a>This field is not inline</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gembed-footer">
            <div class="gembed-footer-icon">
                <img class="gembed-img" src="https://img.guildedcdn.com/asset/DefaultUserAvatars/profile_5.png"/>
            </div>
            <div class="gembed-footer-text">
                <a>YourNameHere</a>
            </div>
        </div>
    </div>
</div>

## Adding an image and a thumbnail

Adding an image and a thumbnail is pretty simple. All you need to do is use `.SetThumbnail(new Uri("link_here"))` to add a thumbnail and/or use `.SetImage(new Uri("link_here"))` to add an image.

```cs
// Get user which used this command
User author = await messageCreated.GetAuthorAsync();
// Create an embed
Embed embed = new Embed()
    .SetTitle("Super cool embed")
    .SetDescription("Hello!")
    .AddField("Inline field", "This is a cool inline field", true)
    .AddField("Another inline", "Some text here", true)
    .AddField("Not inline", "This field is not inline")
    .SetFooter(author.Username, author.ProfilePicture)
    .SetAuthor(
        author.Username, author.ProfilePicture,
        new Uri($"https://guilded.gg/profile/{messageCreated.AuthorId}")
    )
    .SetThumbnail(author.ProfilePicture)
    .SetImage(author.ProfileBanner);
// Send embed we have created
await messageCreated.RespondAsync(
    Message.Generate(embed)
);
```

This will set thumbnail as a profile picture and image as a profile banner.

## Additional

You can also add a timestamp and colour to your embeds.

- To create a timestamp, use `.SetTimestamp()`. This will use your current time. If you want to use a specific time, then use `.SetTimestamp(date_here)`.
- To use a specific colour, use `.SetColor(colour_here)` (`colour_here` is unsigned integer). `.SetColor(23123)` or `.SetColor(0xFFFFFF)`.

## The end

That's all you need to know about embeds.