---
title: Guilded.Base.Content
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base.Content Namespace
- **[ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>')** `Class`
  Represents the base for channel content.
  - **[ChannelContent(TId, Guid, TServer, HashId, DateTime)](ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,HashId,DateTime).md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelContent(TId, Guid, TServer, Guilded.Base.HashId, System.DateTime)')** `Constructor`
    Initializes a new instance of [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') from the specified JSON properties.
  - **[ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')** `Property`
    Gets the identifier of the channel where the content is.
  - **[CreatedAt](ChannelContent_TId,TServer_.CreatedAt.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')** `Property`
    Gets the date of when the content was created.
  - **[CreatedBy](ChannelContent_TId,TServer_.CreatedBy.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the content.
  - **[Id](ChannelContent_TId,TServer_.Id.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id')** `Property`
    Gets the identifier of the content.
  - **[ServerId](ChannelContent_TId,TServer_.ServerId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ServerId')** `Property`
    Gets the identifier of the server where the content is.
  - **[Equals(object)](ChannelContent_TId,TServer_.Equals(object).md 'Guilded.Base.Content.ChannelContent<TId,TServer>.Equals(object)')** `Method`
    Returns whether this instance and the other are equal to each other.
  - **[GetHashCode()](ChannelContent_TId,TServer_.GetHashCode().md 'Guilded.Base.Content.ChannelContent<TId,TServer>.GetHashCode()')** `Method`
    Returns a hashcode of this instance.
  - **[ToString()](ChannelContent_TId,TServer_.ToString().md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ToString()')** `Method`
    Returns string equivalent to this instance.
- **[Doc](Doc.md 'Guilded.Base.Content.Doc')** `Class`
  Represents a document in a document channel.
  - **[Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](Doc.Doc(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_).md 'Guilded.Base.Content.Doc.Doc(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [Doc](Doc.md 'Guilded.Base.Content.Doc') from the specified JSON properties.
  - **[UpdatedBy](Doc.UpdatedBy.md 'Guilded.Base.Content.Doc.UpdatedBy')** `Property`
    Gets the identifier of the member who updated the document.
  - **[DeleteAsync()](Doc.DeleteAsync().md 'Guilded.Base.Content.Doc.DeleteAsync()')** `Method`
    Deletes a doc from a channel.
  - **[UpdateAsync(string, string)](Doc.UpdateAsync(string,string).md 'Guilded.Base.Content.Doc.UpdateAsync(string, string)')** `Method`
    Edits the content or the title of a doc in a channel.
- **[ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread')** `Class`
  Represents a thread or a post in a forum channel.
  - **[ForumThread(uint, Guid, HashId, string, string, HashId, Nullable&lt;Guid&gt;, DateTime, Nullable&lt;DateTime&gt;)](ForumThread.ForumThread(uint,Guid,HashId,string,string,HashId,Nullable_Guid_,DateTime,Nullable_DateTime_).md 'Guilded.Base.Content.ForumThread.ForumThread(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [ForumThread](ForumThread.md 'Guilded.Base.Content.ForumThread') from the specified JSON properties.
  - **[CreatedByWebhook](ForumThread.CreatedByWebhook.md 'Guilded.Base.Content.ForumThread.CreatedByWebhook')** `Property`
    Gets the identifier of the webhook that created the forum thread.
- **[ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>')** `Class`
  Represents an item in a list channel.
  - **[ListItem(Guid, Guid, HashId, string, T, HashId, Nullable&lt;Guid&gt;, DateTime, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItem_T_.ListItem(Guid,Guid,HashId,string,T,HashId,Nullable_Guid_,DateTime,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_).md 'Guilded.Base.Content.ListItem<T>.ListItem(Guid, Guid, Guilded.Base.HashId, string, T, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)')** `Constructor`
    Initializes a new instance of [ListItem&lt;T&gt;](ListItem_T_.md 'Guilded.Base.Content.ListItem<T>') with provided details.
  - **[CompletedAt](ListItem_T_.CompletedAt.md 'Guilded.Base.Content.ListItem<T>.CompletedAt')** `Property`
    Gets the date of when the list item was completed.
  - **[CompletedBy](ListItem_T_.CompletedBy.md 'Guilded.Base.Content.ListItem<T>.CompletedBy')** `Property`
    Gets the identifier of [user](User.md 'Guilded.Base.Users.User') who ticked off this list item.
  - **[CreatedByWebhook](ListItem_T_.CreatedByWebhook.md 'Guilded.Base.Content.ListItem<T>.CreatedByWebhook')** `Property`
    Gets the identifier of the webhook that created the list item.
  - **[IsCompleted](ListItem_T_.IsCompleted.md 'Guilded.Base.Content.ListItem<T>.IsCompleted')** `Property`
    Gets whether the list item was ticked off
  - **[Message](ListItem_T_.Message.md 'Guilded.Base.Content.ListItem<T>.Message')** `Property`
    Gets the text contents of the message in the item.
  - **[Note](ListItem_T_.Note.md 'Guilded.Base.Content.ListItem<T>.Note')** `Property`
    Gets the note of the list item.
  - **[ParentListItemId](ListItem_T_.ParentListItemId.md 'Guilded.Base.Content.ListItem<T>.ParentListItemId')** `Property`
    Gets the identifier of the parent list item of this list item.
  - **[UpdatedAt](ListItem_T_.UpdatedAt.md 'Guilded.Base.Content.ListItem<T>.UpdatedAt')** `Property`
    Gets the date of when the list item was edited.
  - **[UpdatedBy](ListItem_T_.UpdatedBy.md 'Guilded.Base.Content.ListItem<T>.UpdatedBy')** `Property`
    Gets the identifier of [user](User.md 'Guilded.Base.Users.User') who updated this list item.
  - **[DeleteAsync()](ListItem_T_.DeleteAsync().md 'Guilded.Base.Content.ListItem<T>.DeleteAsync()')** `Method`
    Deletes an listItem from a channel.
  - **[UpdateAsync(string, string)](ListItem_T_.UpdateAsync(string,string).md 'Guilded.Base.Content.ListItem<T>.UpdateAsync(string, string)')** `Method`
    Edits the content of a message in a channel.
- **[ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote')** `Class`
  The information about the list item's note.
  - **[ListItemNote(string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNote.ListItemNote(string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_).md 'Guilded.Base.Content.ListItemNote.ListItemNote(string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [ListItemNote](ListItemNote.md 'Guilded.Base.Content.ListItemNote') with provided details.
  - **[Content](ListItemNote.Content.md 'Guilded.Base.Content.ListItemNote.Content')** `Property`
    The contents of the note in the item.
- **[ListItemNoteSummary](ListItemNoteSummary.md 'Guilded.Base.Content.ListItemNoteSummary')** `Class`
  The summary of the list item's note.
  - **[ListItemNoteSummary(HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNoteSummary.ListItemNoteSummary(HashId,DateTime,Nullable_HashId_,Nullable_DateTime_).md 'Guilded.Base.Content.ListItemNoteSummary.ListItemNoteSummary(Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [ListItemNoteSummary](ListItemNoteSummary.md 'Guilded.Base.Content.ListItemNoteSummary') with provided details.
  - **[CreatedAt](ListItemNoteSummary.CreatedAt.md 'Guilded.Base.Content.ListItemNoteSummary.CreatedAt')** `Property`
    The date of when the note was created.
  - **[CreatedBy](ListItemNoteSummary.CreatedBy.md 'Guilded.Base.Content.ListItemNoteSummary.CreatedBy')** `Property`
    The identifier of [user](User.md 'Guilded.Base.Users.User') that created the note.
  - **[UpdatedAt](ListItemNoteSummary.UpdatedAt.md 'Guilded.Base.Content.ListItemNoteSummary.UpdatedAt')** `Property`
    The date of when the note was edited.
  - **[UpdatedBy](ListItemNoteSummary.UpdatedBy.md 'Guilded.Base.Content.ListItemNoteSummary.UpdatedBy')** `Property`
    The identifier of [user](User.md 'Guilded.Base.Users.User') that updated the note.
- **[Message](Message.md 'Guilded.Base.Content.Message')** `Class`
  Represents a message posted in a chat channel or alike.
  - **[Message(Guid, Guid, Nullable&lt;HashId&gt;, string, IList&lt;Guid&gt;, IList&lt;Embed&gt;, bool, HashId, Nullable&lt;Guid&gt;, DateTime, Nullable&lt;DateTime&gt;, MessageType)](Message.Message(Guid,Guid,Nullable_HashId_,string,IList_Guid_,IList_Embed_,bool,HashId,Nullable_Guid_,DateTime,Nullable_DateTime_,MessageType).md 'Guilded.Base.Content.Message.Message(Guid, Guid, System.Nullable<Guilded.Base.HashId>, string, System.Collections.Generic.IList<Guid>, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, bool, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime, System.Nullable<System.DateTime>, Guilded.Base.Content.MessageType)')** `Constructor`
    Initializes a new instance of [Message](Message.md 'Guilded.Base.Content.Message') from the specified JSON properties.
  - **[EmbedLimit](Message.EmbedLimit.md 'Guilded.Base.Content.Message.EmbedLimit')** `Field`
    The count of how many [embeds](Message.Embeds.md 'Guilded.Base.Content.Message.Embeds') there can be in [a message](Message.md 'Guilded.Base.Content.Message').
  - **[ReplyLimit](Message.ReplyLimit.md 'Guilded.Base.Content.Message.ReplyLimit')** `Field`
    The count of how many [messages](Message.md 'Guilded.Base.Content.Message') can be replied to per [message](Message.md 'Guilded.Base.Content.Message').
  - **[TextLimit](Message.TextLimit.md 'Guilded.Base.Content.Message.TextLimit')** `Field`
    The count of how many characters there can be in [message's content](Message.Content.md 'Guilded.Base.Content.Message.Content').
  - **[Content](Message.Content.md 'Guilded.Base.Content.Message.Content')** `Property`
    Gets the text contents of the message.
  - **[CreatedByWebhook](Message.CreatedByWebhook.md 'Guilded.Base.Content.Message.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the message.
  - **[Embeds](Message.Embeds.md 'Guilded.Base.Content.Message.Embeds')** `Property`
    Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains.
  - **[IsPrivate](Message.IsPrivate.md 'Guilded.Base.Content.Message.IsPrivate')** `Property`
    Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or mention is private.
  - **[IsReply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply')** `Property`
    Gets whether the specified message is a reply
  - **[IsSystemMessage](Message.IsSystemMessage.md 'Guilded.Base.Content.Message.IsSystemMessage')** `Property`
    Gets whether the specified message is a system message.
  - **[ReplyMessageIds](Message.ReplyMessageIds.md 'Guilded.Base.Content.Message.ReplyMessageIds')** `Property`
    Gets the list of [messages](Message.md 'Guilded.Base.Content.Message') being replied to.
  - **[Type](Message.Type.md 'Guilded.Base.Content.Message.Type')** `Property`
    Gets the type of the message.
  - **[UpdatedAt](Message.UpdatedAt.md 'Guilded.Base.Content.Message.UpdatedAt')** `Property`
    Gets the date of when the message was edited.
  - **[AddReactionAsync(uint)](Message.AddReactionAsync(uint).md 'Guilded.Base.Content.Message.AddReactionAsync(uint)')** `Method`
    Adds a emote to a message in a channel.
  - **[CreateMessageAsync(bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(bool,bool,Guid[],Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(MessageContent)](Message.CreateMessageAsync(MessageContent).md 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(Embed[])](Message.CreateMessageAsync(Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[])](Message.CreateMessageAsync(string,bool,bool,Guid[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool)](Message.CreateMessageAsync(string,bool,bool).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Guid[])](Message.CreateMessageAsync(string,Guid[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Embed[])](Message.CreateMessageAsync(string,Embed[]).md 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string)](Message.CreateMessageAsync(string).md 'Guilded.Base.Content.Message.CreateMessageAsync(string)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[DeleteAsync()](Message.DeleteAsync().md 'Guilded.Base.Content.Message.DeleteAsync()')** `Method`
    Deletes a message from a channel.
  - **[ReplyAsync(bool, bool, Embed[])](Message.ReplyAsync(bool,bool,Embed[]).md 'Guilded.Base.Content.Message.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool, Embed[])](Message.ReplyAsync(string,bool,bool,Embed[]).md 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool)](Message.ReplyAsync(string,bool,bool).md 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string)](Message.ReplyAsync(string).md 'Guilded.Base.Content.Message.ReplyAsync(string)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId.md 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[UpdateAsync(string)](Message.UpdateAsync(string).md 'Guilded.Base.Content.Message.UpdateAsync(string)')** `Method`
    Edits the content of a message in a channel.
- **[MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent')** `Class`
  Represents the complete contents of a message.
  - **[MessageContent()](MessageContent.MessageContent().md 'Guilded.Base.Content.MessageContent.MessageContent()')** `Constructor`
    Creates an instance of [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent') with no content.
  - **[MessageContent(string)](MessageContent.MessageContent(string).md 'Guilded.Base.Content.MessageContent.MessageContent(string)')** `Constructor`
    Creates an instance of [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent').
  - **[MessageContent(IList&lt;Embed&gt;, IList&lt;Guid&gt;, Nullable&lt;bool&gt;, Nullable&lt;bool&gt;)](MessageContent.MessageContent(IList_Embed_,IList_Guid_,Nullable_bool_,Nullable_bool_).md 'Guilded.Base.Content.MessageContent.MessageContent(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, System.Collections.Generic.IList<Guid>, System.Nullable<bool>, System.Nullable<bool>)')** `Constructor`
    Creates an instance of [MessageContent](MessageContent.md 'Guilded.Base.Content.MessageContent') with no content.
  - **[Content](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content')** `Property`
    Gets the text contents of the message.
  - **[Embeds](MessageContent.Embeds.md 'Guilded.Base.Content.MessageContent.Embeds')** `Property`
    Gets the list of [custom embeds](Embed.md 'Guilded.Base.Embeds.Embed') that this message contains.
  - **[IsPrivate](MessageContent.IsPrivate.md 'Guilded.Base.Content.MessageContent.IsPrivate')** `Property`
    Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or mention is private.
  - **[IsSilent](MessageContent.IsSilent.md 'Guilded.Base.Content.MessageContent.IsSilent')** `Property`
    Gets whether [the reply](Message.IsReply.md 'Guilded.Base.Content.Message.IsReply') or the mention is silent and does not ping anyone.
  - **[OnlyText](MessageContent.OnlyText.md 'Guilded.Base.Content.MessageContent.OnlyText')** `Property`
    Gets whether the message is [text-only](MessageContent.Content.md 'Guilded.Base.Content.MessageContent.Content') and has no other content.
  - **[ReplyMessageIds](MessageContent.ReplyMessageIds.md 'Guilded.Base.Content.MessageContent.ReplyMessageIds')** `Property`
    Gets the list of [messages](Message.md 'Guilded.Base.Content.Message') being replied to.
- **[Reaction](Reaction.md 'Guilded.Base.Content.Reaction')** `Class`
  Represents a [content](ChannelContent_TId,TServer_.md 'Guilded.Base.Content.ChannelContent<TId,TServer>') reaction.
  - **[Reaction(uint, Nullable&lt;HashId&gt;, HashId, Nullable&lt;Guid&gt;, DateTime)](Reaction.Reaction(uint,Nullable_HashId_,HashId,Nullable_Guid_,DateTime).md 'Guilded.Base.Content.Reaction.Reaction(uint, System.Nullable<Guilded.Base.HashId>, Guilded.Base.HashId, System.Nullable<Guid>, System.DateTime)')** `Constructor`
    Initializes a new instance of [Reaction](Reaction.md 'Guilded.Base.Content.Reaction') with provided details.
  - **[CreatedAt](Reaction.CreatedAt.md 'Guilded.Base.Content.Reaction.CreatedAt')** `Property`
    Gets the date of when the reaction was created.
  - **[CreatedBy](Reaction.CreatedBy.md 'Guilded.Base.Content.Reaction.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') that created the reaction.
  - **[CreatedByWebhook](Reaction.CreatedByWebhook.md 'Guilded.Base.Content.Reaction.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook.md 'Guilded.Base.Servers.Webhook') that created the reaction.
  - **[Id](Reaction.Id.md 'Guilded.Base.Content.Reaction.Id')** `Property`
    Gets the identifier of the emote reacted with.
  - **[ServerId](Reaction.ServerId.md 'Guilded.Base.Content.Reaction.ServerId')** `Property`
    Gets the identifier of the server where the content is.
  - **[Equals(object)](Reaction.Equals(object).md 'Guilded.Base.Content.Reaction.Equals(object)')** `Method`
    Returns whether this and obj are equal to each other.
  - **[GetHashCode()](Reaction.GetHashCode().md 'Guilded.Base.Content.Reaction.GetHashCode()')** `Method`
    Gets a hashcode of this object.
- **[TitledContent](TitledContent.md 'Guilded.Base.Content.TitledContent')** `Class`
  Represents a document in a document channel.
  - **[TitledContent(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;DateTime&gt;)](TitledContent.TitledContent(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_DateTime_).md 'Guilded.Base.Content.TitledContent.TitledContent(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [TitledContent](TitledContent.md 'Guilded.Base.Content.TitledContent') from the specified JSON properties.
  - **[Content](TitledContent.Content.md 'Guilded.Base.Content.TitledContent.Content')** `Property`
    Gets the text contents of the document.
  - **[Title](TitledContent.Title.md 'Guilded.Base.Content.TitledContent.Title')** `Property`
    Gets the title of the document.
  - **[UpdatedAt](TitledContent.UpdatedAt.md 'Guilded.Base.Content.TitledContent.UpdatedAt')** `Property`
    Gets the date of when the content were updated.
  - **[AddReactionAsync(uint)](TitledContent.AddReactionAsync(uint).md 'Guilded.Base.Content.TitledContent.AddReactionAsync(uint)')** `Method`
    Adds a emote to the content in a channel.
- **[ICreatableContent](ICreatableContent.md 'Guilded.Base.Content.ICreatableContent')** `Interface`
  Represents the content that can be created.
  - **[CreatedAt](ICreatableContent.CreatedAt.md 'Guilded.Base.Content.ICreatableContent.CreatedAt')** `Property`
    Gets the date of when the content was created.
  - **[CreatedBy](ICreatableContent.CreatedBy.md 'Guilded.Base.Content.ICreatableContent.CreatedBy')** `Property`
    Gets The identifier of [user](User.md 'Guilded.Base.Users.User') creator of the content.
- **[IReactibleContent](IReactibleContent.md 'Guilded.Base.Content.IReactibleContent')** `Interface`
  Represents the content that can be reacted on.
  - **[AddReactionAsync(uint)](IReactibleContent.AddReactionAsync(uint).md 'Guilded.Base.Content.IReactibleContent.AddReactionAsync(uint)')** `Method`
    Adds a emote to the content in a channel.
- **[IUpdatableContent](IUpdatableContent.md 'Guilded.Base.Content.IUpdatableContent')** `Interface`
  Represents the content that can be updated.
  - **[UpdatedAt](IUpdatableContent.UpdatedAt.md 'Guilded.Base.Content.IUpdatableContent.UpdatedAt')** `Property`
    Gets the date of when the content was edited.
- **[IWebhookCreatable](IWebhookCreatable.md 'Guilded.Base.Content.IWebhookCreatable')** `Interface`
  Represents the content that can be created by a webhook.
  - **[CreatedByWebhook](IWebhookCreatable.CreatedByWebhook.md 'Guilded.Base.Content.IWebhookCreatable.CreatedByWebhook')** `Property`
    Gets the identifier of the webhook creator of the content.
- **[MessageType](MessageType.md 'Guilded.Base.Content.MessageType')** `Enum`
  Represents the type of a [message](Message.md 'Guilded.Base.Content.Message') that was created or updated.
  - **[Default](MessageType.md#Guilded.Base.Content.MessageType.Default 'Guilded.Base.Content.MessageType.Default')** `Field`
      
    A plain message that holds [normal content](Message.Content.md 'Guilded.Base.Content.Message.Content').  
      
    This can be created by anyone.
  - **[System](MessageType.md#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System')** `Field`
      
    A system event that is created once an action is done.  
      
    This can't be created by anyone and only occurs if certain actions happen.