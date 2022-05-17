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
- **[ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>')** `Class`
  Represents the base for channel content.
  - **[ChannelContent(TId, Guid, TServer, HashId, DateTime)](ChannelContent_TId,TServer_.ChannelContent(TId,Guid,TServer,HashId,DateTime) 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelContent(TId, Guid, TServer, Guilded.Base.HashId, System.DateTime)')** `Constructor`
    Initializes a new instance of [ChannelContent&lt;TId,TServer&gt;](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') from the specified JSON properties.
  - **[ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')** `Property`
    Gets the identifier of the channel where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[CreatedAt](ChannelContent_TId,TServer_.CreatedAt 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were created.
  - **[CreatedBy](ChannelContent_TId,TServer_.CreatedBy 'Guilded.Base.Content.ChannelContent<TId,TServer>.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[Id](ChannelContent_TId,TServer_.Id 'Guilded.Base.Content.ChannelContent<TId,TServer>.Id')** `Property`
    Gets the identifier of [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
  - **[ServerId](ChannelContent_TId,TServer_.ServerId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ServerId')** `Property`
    Gets the identifier of the server where [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') are.
  - **[Equals(object)](ChannelContent_TId,TServer_.Equals(object) 'Guilded.Base.Content.ChannelContent<TId,TServer>.Equals(object)')** `Method`
    Returns whether this instance and the other are equal to each other.
  - **[GetHashCode()](ChannelContent_TId,TServer_.GetHashCode() 'Guilded.Base.Content.ChannelContent<TId,TServer>.GetHashCode()')** `Method`
    Returns a hashcode of this instance.
  - **[ToString()](ChannelContent_TId,TServer_.ToString() 'Guilded.Base.Content.ChannelContent<TId,TServer>.ToString()')** `Method`
    Returns string equivalent to this instance.
- **[Doc](Doc 'Guilded.Base.Content.Doc')** `Class`
  Represents a document in [a document channel](ChannelType#Guilded.Base.Servers.ChannelType.Docs 'Guilded.Base.Servers.ChannelType.Docs').
  - **[Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](Doc.Doc(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.Base.Content.Doc.Doc(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [Doc](Doc 'Guilded.Base.Content.Doc') from the specified JSON properties.
  - **[UpdatedBy](Doc.UpdatedBy 'Guilded.Base.Content.Doc.UpdatedBy')** `Property`
    Gets the identifier of [the member](Member 'Guilded.Base.Servers.Member') who updated [the document](Doc 'Guilded.Base.Content.Doc').
  - **[DeleteAsync()](Doc.DeleteAsync() 'Guilded.Base.Content.Doc.DeleteAsync()')** `Method`
    Deletes the doc.
  - **[UpdateAsync(string, string)](Doc.UpdateAsync(string,string) 'Guilded.Base.Content.Doc.UpdateAsync(string, string)')** `Method`
    Edits content or title of the doc.
- **[ForumThread](ForumThread 'Guilded.Base.Content.ForumThread')** `Class`
  Represents a thread or a post in [a forum channel](ChannelType#Guilded.Base.Servers.ChannelType.Forums 'Guilded.Base.Servers.ChannelType.Forums').
  - **[ForumThread(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;Guid&gt;, Nullable&lt;DateTime&gt;)](ForumThread.ForumThread(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_Guid_,Nullable_DateTime_) 'Guilded.Base.Content.ForumThread.ForumThread(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [ForumThread](ForumThread 'Guilded.Base.Content.ForumThread') from the specified JSON properties.
  - **[CreatedByWebhook](ForumThread.CreatedByWebhook 'Guilded.Base.Content.ForumThread.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the forum thread](ForumThread 'Guilded.Base.Content.ForumThread').
- **[ListItem](ListItem 'Guilded.Base.Content.ListItem')** `Class`
  Represents an item in a list channel.
  - **[ListItem(Guid, Guid, HashId, string, HashId, DateTime, Nullable&lt;Guid&gt;, ListItemNote, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItem.ListItem(Guid,Guid,HashId,string,HashId,DateTime,Nullable_Guid_,ListItemNote,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.ListItem.ListItem(Guid, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, Guilded.Base.Content.ListItemNote, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)')** `Constructor`
    Initializes a new instance of [ListItem](ListItem 'Guilded.Base.Content.ListItem') from the specified JSON properties.
- **[ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>')** `Class`
  Represents an item in [a list channel](ChannelType#Guilded.Base.Servers.ChannelType.List 'Guilded.Base.Servers.ChannelType.List').
  - **[ListItemBase(Guid, Guid, HashId, string, HashId, DateTime, Nullable&lt;Guid&gt;, T, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItemBase_T_.ListItemBase(Guid,Guid,HashId,string,HashId,DateTime,Nullable_Guid_,T,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.ListItemBase<T>.ListItemBase(Guid, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, T, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)')** `Constructor`
    Initializes a new instance of [ListItemBase&lt;T&gt;](ListItemBase_T_ 'Guilded.Base.Content.ListItemBase<T>') from the specified JSON properties.
  - **[CompletedAt](ListItemBase_T_.CompletedAt 'Guilded.Base.Content.ListItemBase<T>.CompletedAt')** `Property`
    Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was completed.
  - **[CompletedBy](ListItemBase_T_.CompletedBy 'Guilded.Base.Content.ListItemBase<T>.CompletedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') who ticked off [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CreatedByWebhook](ListItemBase_T_.CreatedByWebhook 'Guilded.Base.Content.ListItemBase<T>.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the list item.
  - **[IsCompleted](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted')** `Property`
    Gets whether the list item was ticked off
  - **[Message](ListItemBase_T_.Message 'Guilded.Base.Content.ListItemBase<T>.Message')** `Property`
    Gets the text contents of the message in [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[Note](ListItemBase_T_.Note 'Guilded.Base.Content.ListItemBase<T>.Note')** `Property`
    Gets the note of [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[ParentId](ListItemBase_T_.ParentId 'Guilded.Base.Content.ListItemBase<T>.ParentId')** `Property`
    Gets the identifier of [the parent item](ListItem 'Guilded.Base.Content.ListItem') of [the item](ListItem 'Guilded.Base.Content.ListItem').
  - **[UpdatedAt](ListItemBase_T_.UpdatedAt 'Guilded.Base.Content.ListItemBase<T>.UpdatedAt')** `Property`
    Gets the date when [the item](ListItem 'Guilded.Base.Content.ListItem') was edited.
  - **[UpdatedBy](ListItemBase_T_.UpdatedBy 'Guilded.Base.Content.ListItemBase<T>.UpdatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') who updated [the list item](ListItem 'Guilded.Base.Content.ListItem').
  - **[CompleteAsync()](ListItemBase_T_.CompleteAsync() 'Guilded.Base.Content.ListItemBase<T>.CompleteAsync()')** `Method`
    Marks the listItem as [completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').
  - **[DeleteAsync()](ListItemBase_T_.DeleteAsync() 'Guilded.Base.Content.ListItemBase<T>.DeleteAsync()')** `Method`
    Deletes the listItem.
  - **[UncompleteAsync()](ListItemBase_T_.UncompleteAsync() 'Guilded.Base.Content.ListItemBase<T>.UncompleteAsync()')** `Method`
    Marks the listItem as [not completed](ListItemBase_T_.IsCompleted 'Guilded.Base.Content.ListItemBase<T>.IsCompleted').
  - **[UpdateAsync(string, string)](ListItemBase_T_.UpdateAsync(string,string) 'Guilded.Base.Content.ListItemBase<T>.UpdateAsync(string, string)')** `Method`
    Edits the content of a message.
- **[ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote')** `Class`
  Represents the full information about [the list item's](ListItem 'Guilded.Base.Content.ListItem') note.
  - **[ListItemNote(string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNote.ListItemNote(string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.Base.Content.ListItemNote.ListItemNote(string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [ListItemNote](ListItemNote 'Guilded.Base.Content.ListItemNote') with provided details.
  - **[Content](ListItemNote.Content 'Guilded.Base.Content.ListItemNote.Content')** `Property`
    The contents of the note in the item.
- **[ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary')** `Class`
  Represents the summary of [the list item's](ListItemSummary 'Guilded.Base.Content.ListItemSummary') note.
  - **[ListItemNoteSummary(HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](ListItemNoteSummary.ListItemNoteSummary(HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.Base.Content.ListItemNoteSummary.ListItemNoteSummary(Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [ListItemNoteSummary](ListItemNoteSummary 'Guilded.Base.Content.ListItemNoteSummary') with provided details.
  - **[CreatedAt](ListItemNoteSummary.CreatedAt 'Guilded.Base.Content.ListItemNoteSummary.CreatedAt')** `Property`
    the date when the note was created.
  - **[CreatedBy](ListItemNoteSummary.CreatedBy 'Guilded.Base.Content.ListItemNoteSummary.CreatedBy')** `Property`
    The identifier of [user](User 'Guilded.Base.Users.User') that created the note.
  - **[UpdatedAt](ListItemNoteSummary.UpdatedAt 'Guilded.Base.Content.ListItemNoteSummary.UpdatedAt')** `Property`
    the date when the note was edited.
  - **[UpdatedBy](ListItemNoteSummary.UpdatedBy 'Guilded.Base.Content.ListItemNoteSummary.UpdatedBy')** `Property`
    The identifier of [user](User 'Guilded.Base.Users.User') that updated the note.
- **[ListItemSummary](ListItemSummary 'Guilded.Base.Content.ListItemSummary')** `Class`
  Represents an item in a list channel.
  - **[ListItemSummary(Guid, Guid, HashId, string, HashId, DateTime, Nullable&lt;Guid&gt;, ListItemNote, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](ListItemSummary.ListItemSummary(Guid,Guid,HashId,string,HashId,DateTime,Nullable_Guid_,ListItemNote,Nullable_DateTime_,Nullable_HashId_,Nullable_DateTime_,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.ListItemSummary.ListItemSummary(Guid, Guid, Guilded.Base.HashId, string, Guilded.Base.HashId, System.DateTime, System.Nullable<Guid>, Guilded.Base.Content.ListItemNote, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<System.DateTime>, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)')** `Constructor`
    Initializes a new instance of [ListItemSummary](ListItemSummary 'Guilded.Base.Content.ListItemSummary') from the specified JSON properties.
- **[Message](Message 'Guilded.Base.Content.Message')** `Class`
  Represents a message posted in [a document channel](ChannelType#Guilded.Base.Servers.ChannelType.Chat 'Guilded.Base.Servers.ChannelType.Chat') or alike.
  - **[Message(Guid, Guid, HashId, DateTime, MessageType, Nullable&lt;HashId&gt;, IList&lt;Guid&gt;, string, IList&lt;Embed&gt;, bool, Nullable&lt;Guid&gt;, Nullable&lt;DateTime&gt;)](Message.Message(Guid,Guid,HashId,DateTime,MessageType,Nullable_HashId_,IList_Guid_,string,IList_Embed_,bool,Nullable_Guid_,Nullable_DateTime_) 'Guilded.Base.Content.Message.Message(Guid, Guid, Guilded.Base.HashId, System.DateTime, Guilded.Base.Content.MessageType, System.Nullable<Guilded.Base.HashId>, System.Collections.Generic.IList<Guid>, string, System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, bool, System.Nullable<Guid>, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [Message](Message 'Guilded.Base.Content.Message') from the specified JSON properties.
  - **[EmbedLimit](Message.EmbedLimit 'Guilded.Base.Content.Message.EmbedLimit')** `Field`
    The count of how many [embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds') there can be in [a message](Message 'Guilded.Base.Content.Message').
  - **[ReplyLimit](Message.ReplyLimit 'Guilded.Base.Content.Message.ReplyLimit')** `Field`
    The count of how many [messages](Message 'Guilded.Base.Content.Message') can be replied to per [message](Message 'Guilded.Base.Content.Message').
  - **[TextLimit](Message.TextLimit 'Guilded.Base.Content.Message.TextLimit')** `Field`
    The count of how many [characters](https://docs.microsoft.com/en-us/dotnet/api/System.Char 'System.Char') there can be in [message's content](Message.Content 'Guilded.Base.Content.Message.Content').
  - **[Content](Message.Content 'Guilded.Base.Content.Message.Content')** `Property`
    Gets the text contents of [the message](Message 'Guilded.Base.Content.Message').
  - **[CreatedByWebhook](Message.CreatedByWebhook 'Guilded.Base.Content.Message.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created the message.
  - **[Embeds](Message.Embeds 'Guilded.Base.Content.Message.Embeds')** `Property`
    Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains.
  - **[IsPrivate](Message.IsPrivate 'Guilded.Base.Content.Message.IsPrivate')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private.
  - **[IsReply](Message.IsReply 'Guilded.Base.Content.Message.IsReply')** `Property`
    Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a reply](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds') to another message.
  - **[IsSilent](Message.IsSilent 'Guilded.Base.Content.Message.IsSilent')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is silent and doesn't ping any user.
  - **[IsSystemMessage](Message.IsSystemMessage 'Guilded.Base.Content.Message.IsSystemMessage')** `Property`
    Gets whether [the message](Message 'Guilded.Base.Content.Message') is [a system message](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System').
  - **[ReplyMessageIds](Message.ReplyMessageIds 'Guilded.Base.Content.Message.ReplyMessageIds')** `Property`
    Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to.
  - **[Type](Message.Type 'Guilded.Base.Content.Message.Type')** `Property`
    Gets the type of [the message](Message 'Guilded.Base.Content.Message').
  - **[UpdatedAt](Message.UpdatedAt 'Guilded.Base.Content.Message.UpdatedAt')** `Property`
    Gets the date when [the message](Message 'Guilded.Base.Content.Message') was edited.
  - **[AddReactionAsync(uint)](Message.AddReactionAsync(uint) 'Guilded.Base.Content.Message.AddReactionAsync(uint)')** `Method`
    Adds emote to the message.
  - **[CreateMessageAsync(bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(bool,bool,Guid[],Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(MessageContent)](Message.CreateMessageAsync(MessageContent) 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(Embed[])](Message.CreateMessageAsync(Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[], Embed[])](Message.CreateMessageAsync(string,bool,bool,Guid[],Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[], Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool, Guid[])](Message.CreateMessageAsync(string,bool,bool,Guid[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, bool, bool)](Message.CreateMessageAsync(string,bool,bool) 'Guilded.Base.Content.Message.CreateMessageAsync(string, bool, bool)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Guid[])](Message.CreateMessageAsync(string,Guid[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guid[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string, Embed[])](Message.CreateMessageAsync(string,Embed[]) 'Guilded.Base.Content.Message.CreateMessageAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.Base.Content.Message.CreateMessageAsync(string)')** `Method`
    Creates a message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[DeleteAsync()](Message.DeleteAsync() 'Guilded.Base.Content.Message.DeleteAsync()')** `Method`
    Deletes the message.
  - **[ReplyAsync(bool, bool, Embed[])](Message.ReplyAsync(bool,bool,Embed[]) 'Guilded.Base.Content.Message.ReplyAsync(bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(Embed[])](Message.ReplyAsync(Embed[]) 'Guilded.Base.Content.Message.ReplyAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool, Embed[])](Message.ReplyAsync(string,bool,bool,Embed[]) 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool, Guilded.Base.Embeds.Embed[])')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string, bool, bool)](Message.ReplyAsync(string,bool,bool) 'Guilded.Base.Content.Message.ReplyAsync(string, bool, bool)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[ReplyAsync(string)](Message.ReplyAsync(string) 'Guilded.Base.Content.Message.ReplyAsync(string)')** `Method`
    Replies to the message in the parent channel (from [ChannelId](ChannelContent_TId,TServer_.ChannelId 'Guilded.Base.Content.ChannelContent<TId,TServer>.ChannelId')).
  - **[UpdateAsync(MessageContent)](Message.UpdateAsync(MessageContent) 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Content.MessageContent)')** `Method`
    Edits the content of a message.
  - **[UpdateAsync(Embed[])](Message.UpdateAsync(Embed[]) 'Guilded.Base.Content.Message.UpdateAsync(Guilded.Base.Embeds.Embed[])')** `Method`
    Edits the content of a message.
  - **[UpdateAsync(string, Embed[])](Message.UpdateAsync(string,Embed[]) 'Guilded.Base.Content.Message.UpdateAsync(string, Guilded.Base.Embeds.Embed[])')** `Method`
    Edits the content of a message.
  - **[UpdateAsync(string)](Message.UpdateAsync(string) 'Guilded.Base.Content.Message.UpdateAsync(string)')** `Method`
    Edits the content of a message.
- **[MessageContent](MessageContent 'Guilded.Base.Content.MessageContent')** `Class`
  Represents the complete contents of a message.
  - **[MessageContent()](MessageContent.MessageContent() 'Guilded.Base.Content.MessageContent.MessageContent()')** `Constructor`
    Creates an instance of [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent') with no content.
  - **[MessageContent(string)](MessageContent.MessageContent(string) 'Guilded.Base.Content.MessageContent.MessageContent(string)')** `Constructor`
    Creates an instance of [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent').
  - **[MessageContent(IList&lt;Embed&gt;, IList&lt;Guid&gt;, Nullable&lt;bool&gt;, Nullable&lt;bool&gt;)](MessageContent.MessageContent(IList_Embed_,IList_Guid_,Nullable_bool_,Nullable_bool_) 'Guilded.Base.Content.MessageContent.MessageContent(System.Collections.Generic.IList<Guilded.Base.Embeds.Embed>, System.Collections.Generic.IList<Guid>, System.Nullable<bool>, System.Nullable<bool>)')** `Constructor`
    Creates an instance of [MessageContent](MessageContent 'Guilded.Base.Content.MessageContent') with no content.
  - **[Content](MessageContent.Content 'Guilded.Base.Content.MessageContent.Content')** `Property`
    Gets the text contents of [the message](Message 'Guilded.Base.Content.Message').
  - **[Embeds](MessageContent.Embeds 'Guilded.Base.Content.MessageContent.Embeds')** `Property`
    Gets the list of [custom embeds](Embed 'Guilded.Base.Embeds.Embed') that [the message](Message 'Guilded.Base.Content.Message') contains.
  - **[IsPrivate](MessageContent.IsPrivate 'Guilded.Base.Content.MessageContent.IsPrivate')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or mention is private.
  - **[IsSilent](MessageContent.IsSilent 'Guilded.Base.Content.MessageContent.IsSilent')** `Property`
    Gets whether [the reply](Message.IsReply 'Guilded.Base.Content.Message.IsReply') or the mention is silent and does not ping anyone.
  - **[OnlyText](MessageContent.OnlyText 'Guilded.Base.Content.MessageContent.OnlyText')** `Property`
    Gets whether the message is [text-only](MessageContent.Content 'Guilded.Base.Content.MessageContent.Content') and has no other content.
  - **[ReplyMessageIds](MessageContent.ReplyMessageIds 'Guilded.Base.Content.MessageContent.ReplyMessageIds')** `Property`
    Gets the list of [messages](Message 'Guilded.Base.Content.Message') being replied to.
- **[Reaction](Reaction 'Guilded.Base.Content.Reaction')** `Class`
  Represents a [content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') reaction.
  - **[Reaction(uint, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;Guid&gt;)](Reaction.Reaction(uint,HashId,DateTime,Nullable_HashId_,Nullable_Guid_) 'Guilded.Base.Content.Reaction.Reaction(uint, Guilded.Base.HashId, System.DateTime, System.Nullable<Guilded.Base.HashId>, System.Nullable<Guid>)')** `Constructor`
    Initializes a new instance of [Reaction](Reaction 'Guilded.Base.Content.Reaction') with provided details.
  - **[CreatedAt](Reaction.CreatedAt 'Guilded.Base.Content.Reaction.CreatedAt')** `Property`
    Gets the date when [the reaction](Reaction 'Guilded.Base.Content.Reaction') was created.
  - **[CreatedBy](Reaction.CreatedBy 'Guilded.Base.Content.Reaction.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') that created [the reaction](Reaction 'Guilded.Base.Content.Reaction').
  - **[CreatedByWebhook](Reaction.CreatedByWebhook 'Guilded.Base.Content.Reaction.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the reaction](Reaction 'Guilded.Base.Content.Reaction').
  - **[Id](Reaction.Id 'Guilded.Base.Content.Reaction.Id')** `Property`
    Gets the identifier of the emote that was reacted with.
  - **[ServerId](Reaction.ServerId 'Guilded.Base.Content.Reaction.ServerId')** `Property`
    Gets the identifier of [the reaction](Reaction 'Guilded.Base.Content.Reaction') where the content is.
  - **[Equals(object)](Reaction.Equals(object) 'Guilded.Base.Content.Reaction.Equals(object)')** `Method`
    Returns whether this and obj are equal to each other.
  - **[GetHashCode()](Reaction.GetHashCode() 'Guilded.Base.Content.Reaction.GetHashCode()')** `Method`
    Gets a hashcode of this object.
- **[TitledContent](TitledContent 'Guilded.Base.Content.TitledContent')** `Class`
  Represents a document in a document channel.
  - **[TitledContent(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;DateTime&gt;)](TitledContent.TitledContent(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_DateTime_) 'Guilded.Base.Content.TitledContent.TitledContent(uint, Guid, Guilded.Base.HashId, string, string, Guilded.Base.HashId, System.DateTime, System.Nullable<System.DateTime>)')** `Constructor`
    Initializes a new instance of [TitledContent](TitledContent 'Guilded.Base.Content.TitledContent') from the specified JSON properties.
  - **[Content](TitledContent.Content 'Guilded.Base.Content.TitledContent.Content')** `Property`
    Gets the text contents of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent').
  - **[Title](TitledContent.Title 'Guilded.Base.Content.TitledContent.Title')** `Property`
    Gets the title of [the titled content](TitledContent 'Guilded.Base.Content.TitledContent').
  - **[UpdatedAt](TitledContent.UpdatedAt 'Guilded.Base.Content.TitledContent.UpdatedAt')** `Property`
    Gets the date when the content were updated.
  - **[AddReactionAsync(uint)](TitledContent.AddReactionAsync(uint) 'Guilded.Base.Content.TitledContent.AddReactionAsync(uint)')** `Method`
    Adds emote to the content.
- **[ICreatableContent](ICreatableContent 'Guilded.Base.Content.ICreatableContent')** `Interface`
  Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be created.
  - **[CreatedAt](ICreatableContent.CreatedAt 'Guilded.Base.Content.ICreatableContent.CreatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') was created.
  - **[CreatedBy](ICreatableContent.CreatedBy 'Guilded.Base.Content.ICreatableContent.CreatedBy')** `Property`
    Gets the identifier of [user](User 'Guilded.Base.Users.User') creator of the content.
- **[IReactibleContent](IReactibleContent 'Guilded.Base.Content.IReactibleContent')** `Interface`
  Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be [reacted](Reaction 'Guilded.Base.Content.Reaction') on.
  - **[AddReactionAsync(uint)](IReactibleContent.AddReactionAsync(uint) 'Guilded.Base.Content.IReactibleContent.AddReactionAsync(uint)')** `Method`
    Adds emote to the content.
- **[IUpdatableContent](IUpdatableContent 'Guilded.Base.Content.IUpdatableContent')** `Interface`
  Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be edited.
  - **[UpdatedAt](IUpdatableContent.UpdatedAt 'Guilded.Base.Content.IUpdatableContent.UpdatedAt')** `Property`
    Gets the date when [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') were edited.
- **[IWebhookCreatable](IWebhookCreatable 'Guilded.Base.Content.IWebhookCreatable')** `Interface`
  Represents [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>') that can be created by [a webhook](Webhook 'Guilded.Base.Servers.Webhook').
  - **[CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.Base.Content.IWebhookCreatable.CreatedByWebhook')** `Property`
    Gets the identifier of [the webhook](Webhook 'Guilded.Base.Servers.Webhook') that created [the content](ChannelContent_TId,TServer_ 'Guilded.Base.Content.ChannelContent<TId,TServer>').
- **[MessageType](MessageType 'Guilded.Base.Content.MessageType')** `Enum`
  Represents the type of a [message](Message 'Guilded.Base.Content.Message') that was created or updated.
  - **[Default](MessageType#Guilded.Base.Content.MessageType.Default 'Guilded.Base.Content.MessageType.Default')** `Field`
      
    A plain [message](Message 'Guilded.Base.Content.Message') that holds [normal content](Message.Content 'Guilded.Base.Content.Message.Content').  
      
    This can be created by anyone.
  - **[System](MessageType#Guilded.Base.Content.MessageType.System 'Guilded.Base.Content.MessageType.System')** `Field`
      
    A system event that is created once an action is done.  
      
    This can't be created by anyone and only occurs if certain actions happen.