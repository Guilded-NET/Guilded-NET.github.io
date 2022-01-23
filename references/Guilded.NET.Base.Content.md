---
title: Guilded.NET.Base.Content
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.NET.Base.Content Namespace
- **[ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>')** `Class`
  The base type for channel contents.
  - **[ChannelContent(T, Guid, S, HashId, DateTime)](ChannelContent_T,S_.ChannelContent(T,Guid,S,HashId,DateTime) 'Guilded.NET.Base.Content.ChannelContent<T,S>.ChannelContent(T, System.Guid, S, Guilded.NET.Base.HashId, System.DateTime)')** `Constructor`
    Creates a new instance of [ChannelContent&lt;T,S&gt;](ChannelContent_T,S_ 'Guilded.NET.Base.Content.ChannelContent<T,S>') with provided details.
  - **[ChannelId](ChannelContent_T,S_.ChannelId 'Guilded.NET.Base.Content.ChannelContent<T,S>.ChannelId')** `Property`
    The identifier of the channel where the content is.
  - **[CreatedAt](ChannelContent_T,S_.CreatedAt 'Guilded.NET.Base.Content.ChannelContent<T,S>.CreatedAt')** `Property`
    The date of when the content was created.
  - **[CreatedBy](ChannelContent_T,S_.CreatedBy 'Guilded.NET.Base.Content.ChannelContent<T,S>.CreatedBy')** `Property`
    The identifier of the user creator of the content.
  - **[Id](ChannelContent_T,S_.Id 'Guilded.NET.Base.Content.ChannelContent<T,S>.Id')** `Property`
    The identifier of the content.
  - **[ServerId](ChannelContent_T,S_.ServerId 'Guilded.NET.Base.Content.ChannelContent<T,S>.ServerId')** `Property`
    The identifier of the server where the content is.
  - **[Equals(object)](ChannelContent_T,S_.Equals(object) 'Guilded.NET.Base.Content.ChannelContent<T,S>.Equals(object)')** `Method`
    Returns whether this instance and specified instance are equal to each other.
  - **[GetHashCode()](ChannelContent_T,S_.GetHashCode() 'Guilded.NET.Base.Content.ChannelContent<T,S>.GetHashCode()')** `Method`
    Gets a hashcode of this instance.
  - **[ToString()](ChannelContent_T,S_.ToString() 'Guilded.NET.Base.Content.ChannelContent<T,S>.ToString()')** `Method`
    Returns string equivalent to this instance.
- **[Doc](Doc 'Guilded.NET.Base.Content.Doc')** `Class`
  A document in a document channel.
  - **[Doc(uint, Guid, HashId, string, string, HashId, DateTime, Nullable&lt;HashId&gt;, Nullable&lt;DateTime&gt;)](Doc.Doc(uint,Guid,HashId,string,string,HashId,DateTime,Nullable_HashId_,Nullable_DateTime_) 'Guilded.NET.Base.Content.Doc.Doc(uint, System.Guid, Guilded.NET.Base.HashId, string, string, Guilded.NET.Base.HashId, System.DateTime, System.Nullable<Guilded.NET.Base.HashId>, System.Nullable<System.DateTime>)')** `Constructor`
    Creates a new instance of [Doc](Doc 'Guilded.NET.Base.Content.Doc') with provided details.
  - **[Content](Doc.Content 'Guilded.NET.Base.Content.Doc.Content')** `Property`
    The contents of the document.
  - **[Title](Doc.Title 'Guilded.NET.Base.Content.Doc.Title')** `Property`
    The title of the document.
  - **[UpdatedAt](Doc.UpdatedAt 'Guilded.NET.Base.Content.Doc.UpdatedAt')** `Property`
    The date of when the document was updated.
  - **[UpdatedBy](Doc.UpdatedBy 'Guilded.NET.Base.Content.Doc.UpdatedBy')** `Property`
    The identifier of the user updater of the document.
  - **[AddReactionAsync(uint)](Doc.AddReactionAsync(uint) 'Guilded.NET.Base.Content.Doc.AddReactionAsync(uint)')** `Method`
    Adds a reaction to the content.
  - **[DeleteDocAsync()](Doc.DeleteDocAsync() 'Guilded.NET.Base.Content.Doc.DeleteDocAsync()')** `Method`
    Deletes the document.
  - **[RemoveReactionAsync(uint)](Doc.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.Doc.RemoveReactionAsync(uint)')** `Method`
    Removes a reaction from the content.
  - **[UpdateDocAsync(string, string)](Doc.UpdateDocAsync(string,string) 'Guilded.NET.Base.Content.Doc.UpdateDocAsync(string, string)')** `Method`
    Updates the document.
- **[ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread')** `Class`
  A forum thread in a forum channel.
  - **[ForumThread(uint, Guid, HashId, string, string, HashId, Nullable&lt;Guid&gt;, DateTime)](ForumThread.ForumThread(uint,Guid,HashId,string,string,HashId,Nullable_Guid_,DateTime) 'Guilded.NET.Base.Content.ForumThread.ForumThread(uint, System.Guid, Guilded.NET.Base.HashId, string, string, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime)')** `Constructor`
    Creates a new instance of [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread') with provided details.
  - **[Content](ForumThread.Content 'Guilded.NET.Base.Content.ForumThread.Content')** `Property`
    The contents of the forum thread.
  - **[CreatedByWebhook](ForumThread.CreatedByWebhook 'Guilded.NET.Base.Content.ForumThread.CreatedByWebhook')** `Property`
    The identifier of the webhook creator of the forum thread.
  - **[Title](ForumThread.Title 'Guilded.NET.Base.Content.ForumThread.Title')** `Property`
    The title of the forum thread.
  - **[AddReactionAsync(uint)](ForumThread.AddReactionAsync(uint) 'Guilded.NET.Base.Content.ForumThread.AddReactionAsync(uint)')** `Method`
    Adds a reaction to the content.
  - **[RemoveReactionAsync(uint)](ForumThread.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.ForumThread.RemoveReactionAsync(uint)')** `Method`
    Removes a reaction from the content.
- **[ListItem](ListItem 'Guilded.NET.Base.Content.ListItem')** `Class`
  A list item in a list channel.
  - **[ListItem(Guid, Guid, HashId, string, string, HashId, Nullable&lt;Guid&gt;, DateTime)](ListItem.ListItem(Guid,Guid,HashId,string,string,HashId,Nullable_Guid_,DateTime) 'Guilded.NET.Base.Content.ListItem.ListItem(System.Guid, System.Guid, Guilded.NET.Base.HashId, string, string, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime)')** `Constructor`
    Creates a new instance of [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem') with provided details.
  - **[CreatedByWebhook](ListItem.CreatedByWebhook 'Guilded.NET.Base.Content.ListItem.CreatedByWebhook')** `Property`
    The identifier of the webhook creator of the list item.
  - **[Message](ListItem.Message 'Guilded.NET.Base.Content.ListItem.Message')** `Property`
    The contents of the message in the item.
  - **[Note](ListItem.Note 'Guilded.NET.Base.Content.ListItem.Note')** `Property`
    The contents of the note in the item.
- **[Message](Message 'Guilded.NET.Base.Content.Message')** `Class`
  A message posted in the chat.
  - **[Message(Guid, Guid, Nullable&lt;HashId&gt;, string, IList&lt;Guid&gt;, bool, HashId, Nullable&lt;Guid&gt;, DateTime, MessageType)](Message.Message(Guid,Guid,Nullable_HashId_,string,IList_Guid_,bool,HashId,Nullable_Guid_,DateTime,MessageType) 'Guilded.NET.Base.Content.Message.Message(System.Guid, System.Guid, System.Nullable<Guilded.NET.Base.HashId>, string, System.Collections.Generic.IList<System.Guid>, bool, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime, Guilded.NET.Base.Content.MessageType)')** `Constructor`
    Creates a new instance of [Message](Message 'Guilded.NET.Base.Content.Message') with provided details.
  - **[ContentLimit](Message.ContentLimit 'Guilded.NET.Base.Content.Message.ContentLimit')** `Field`
    The limit of the message content
  - **[Content](Message.Content 'Guilded.NET.Base.Content.Message.Content')** `Property`
    The contents of the message.
  - **[CreatedByWebhook](Message.CreatedByWebhook 'Guilded.NET.Base.Content.Message.CreatedByWebhook')** `Property`
    The identifier of the webhook creator of the message.
  - **[IsPrivate](Message.IsPrivate 'Guilded.NET.Base.Content.Message.IsPrivate')** `Property`
    Whether the reply is private.
  - **[IsReply](Message.IsReply 'Guilded.NET.Base.Content.Message.IsReply')** `Property`
    Whether the specified message is a reply
  - **[ReplyMessageIds](Message.ReplyMessageIds 'Guilded.NET.Base.Content.Message.ReplyMessageIds')** `Property`
    The list of messages being replied to.
  - **[Type](Message.Type 'Guilded.NET.Base.Content.Message.Type')** `Property`
    The type of the message.
  - **[UpdatedAt](Message.UpdatedAt 'Guilded.NET.Base.Content.Message.UpdatedAt')** `Property`
    The date of when the message was updated.
  - **[AddReactionAsync(uint)](Message.AddReactionAsync(uint) 'Guilded.NET.Base.Content.Message.AddReactionAsync(uint)')** `Method`
    Adds a reaction to the message.
  - **[CreateMessageAsync(string, bool, Guid[])](Message.CreateMessageAsync(string,bool,Guid[]) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, bool, System.Guid[])')** `Method`
    Creates a message in a chat.
  - **[CreateMessageAsync(string, Guid[])](Message.CreateMessageAsync(string,Guid[]) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string, System.Guid[])')** `Method`
    Creates a message in a chat.
  - **[CreateMessageAsync(string)](Message.CreateMessageAsync(string) 'Guilded.NET.Base.Content.Message.CreateMessageAsync(string)')** `Method`
    Creates a message in a chat.
  - **[DeleteMessageAsync()](Message.DeleteMessageAsync() 'Guilded.NET.Base.Content.Message.DeleteMessageAsync()')** `Method`
    Deletes the message.
  - **[RemoveReactionAsync(uint)](Message.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.Message.RemoveReactionAsync(uint)')** `Method`
    Removes a reaction from the message.
  - **[ReplyAsync(string, bool)](Message.ReplyAsync(string,bool) 'Guilded.NET.Base.Content.Message.ReplyAsync(string, bool)')** `Method`
    Replies to the message in the chat.
  - **[ReplyAsync(string)](Message.ReplyAsync(string) 'Guilded.NET.Base.Content.Message.ReplyAsync(string)')** `Method`
    Replies to the message in the chat.
  - **[UpdateMessageAsync(string)](Message.UpdateMessageAsync(string) 'Guilded.NET.Base.Content.Message.UpdateMessageAsync(string)')** `Method`
    Updates the message.
- **[MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent')** `Class`
  Represents the contents of the message.
  - **[MessageContent()](MessageContent.MessageContent() 'Guilded.NET.Base.Content.MessageContent.MessageContent()')** `Constructor`
    Creates an instance of [MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent') with no content.
  - **[MessageContent(string)](MessageContent.MessageContent(string) 'Guilded.NET.Base.Content.MessageContent.MessageContent(string)')** `Constructor`
    Creates an instance of [MessageContent](MessageContent 'Guilded.NET.Base.Content.MessageContent').
  - **[Content](MessageContent.Content 'Guilded.NET.Base.Content.MessageContent.Content')** `Property`
    The contents of the message.
  - **[Embeds](MessageContent.Embeds 'Guilded.NET.Base.Content.MessageContent.Embeds')** `Property`
    The list of embeds in the message.
  - **[IsPrivate](MessageContent.IsPrivate 'Guilded.NET.Base.Content.MessageContent.IsPrivate')** `Property`
    Whether the reply is private.
  - **[ReplyMessageIds](MessageContent.ReplyMessageIds 'Guilded.NET.Base.Content.MessageContent.ReplyMessageIds')** `Property`
    The list of messages being replied to.
- **[Reaction](Reaction 'Guilded.NET.Base.Content.Reaction')** `Class`
  The information about a reaction.
  - **[Reaction(uint, Nullable&lt;HashId&gt;, HashId, Nullable&lt;Guid&gt;, DateTime)](Reaction.Reaction(uint,Nullable_HashId_,HashId,Nullable_Guid_,DateTime) 'Guilded.NET.Base.Content.Reaction.Reaction(uint, System.Nullable<Guilded.NET.Base.HashId>, Guilded.NET.Base.HashId, System.Nullable<System.Guid>, System.DateTime)')** `Constructor`
    Creates a new instance of [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction') with provided details.
  - **[CreatedAt](Reaction.CreatedAt 'Guilded.NET.Base.Content.Reaction.CreatedAt')** `Property`
    The date of when this reaction was created.
  - **[CreatedBy](Reaction.CreatedBy 'Guilded.NET.Base.Content.Reaction.CreatedBy')** `Property`
    The identifier of the user creator of the reaction.
  - **[CreatedByWebhook](Reaction.CreatedByWebhook 'Guilded.NET.Base.Content.Reaction.CreatedByWebhook')** `Property`
    The identifier of the webhook creator of the reaction.
  - **[Id](Reaction.Id 'Guilded.NET.Base.Content.Reaction.Id')** `Property`
    The identifier of the emote reacted with.
  - **[ServerId](Reaction.ServerId 'Guilded.NET.Base.Content.Reaction.ServerId')** `Property`
    The identifier of the server where the content is.
  - **[Equals(object)](Reaction.Equals(object) 'Guilded.NET.Base.Content.Reaction.Equals(object)')** `Method`
    Returns whether this and obj are equal to each other.
  - **[GetHashCode()](Reaction.GetHashCode() 'Guilded.NET.Base.Content.Reaction.GetHashCode()')** `Method`
    Gets a hashcode of this object.
- **[IReactibleContent](IReactibleContent 'Guilded.NET.Base.Content.IReactibleContent')** `Interface`
  The content that can be reacted on.
  - **[AddReactionAsync(uint)](IReactibleContent.AddReactionAsync(uint) 'Guilded.NET.Base.Content.IReactibleContent.AddReactionAsync(uint)')** `Method`
    Adds a reaction to the content.
  - **[RemoveReactionAsync(uint)](IReactibleContent.RemoveReactionAsync(uint) 'Guilded.NET.Base.Content.IReactibleContent.RemoveReactionAsync(uint)')** `Method`
    Removes a reaction from the content.
- **[IUpdatableContent](IUpdatableContent 'Guilded.NET.Base.Content.IUpdatableContent')** `Interface`
  The content that can be updated.
  - **[UpdatedAt](IUpdatableContent.UpdatedAt 'Guilded.NET.Base.Content.IUpdatableContent.UpdatedAt')** `Property`
    The date of when the content was updated.
- **[IWebhookCreatable](IWebhookCreatable 'Guilded.NET.Base.Content.IWebhookCreatable')** `Interface`
  The content that can be created by a webhook.
  - **[CreatedByWebhook](IWebhookCreatable.CreatedByWebhook 'Guilded.NET.Base.Content.IWebhookCreatable.CreatedByWebhook')** `Property`
    The identifier of the webhook creator of the content.
- **[MessageType](MessageType 'Guilded.NET.Base.Content.MessageType')** `Enum`
  The type of the message created or updated.
  - **[Default](MessageType#Guilded.NET.Base.Content.MessageType.Default 'Guilded.NET.Base.Content.MessageType.Default')** `Field`
      
    A plain message that holds [Content](Message.Content 'Guilded.NET.Base.Content.Message.Content').  
      
    This can be created by anyone.
  - **[System](MessageType#Guilded.NET.Base.Content.MessageType.System 'Guilded.NET.Base.Content.MessageType.System')** `Field`
      
    A system event that is created once some action is done.  
      
    This can't be created by anyone and only occurs if certain actions happen.