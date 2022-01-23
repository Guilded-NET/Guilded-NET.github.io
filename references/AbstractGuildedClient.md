---
title: AbstractGuildedClient
layout: references
section: references
tags:
  - references
  - class
description: "

A base for all Guilded clients.

```csharp
public abstract class AbstractGuildedClient : Guilded.NET.Base.BaseGuildedClient
```"
---

## AbstractGuildedClient Class
###### **Assembly:** `Guilded.NET`<br/>**Namespace:** [`Guilded.NET`](Guilded.NET 'Guilded.NET')

A base for all Guilded clients.

```csharp
public abstract class AbstractGuildedClient : Guilded.NET.Base.BaseGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#129106; AbstractGuildedClient

Derived  
&#8627; [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')

### Remarks
  
A base class for [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') and soon other clients.  
  
There is not much to be used here. It is recommended to use [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient').

| Constructors | |
| :--- | :--- |
| [AbstractGuildedClient()](AbstractGuildedClient.AbstractGuildedClient() 'Guilded.NET.AbstractGuildedClient.AbstractGuildedClient()') | A base constructor for creating Guilded clients. |

| Fields | |
| :--- | :--- |
| [PreparedEvent](AbstractGuildedClient.PreparedEvent 'Guilded.NET.AbstractGuildedClient.PreparedEvent') | An event when the client is prepared. |

| Properties | |
| :--- | :--- |
| [GuildedEvents](AbstractGuildedClient.GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents') | A dictionary of Guilded events. |
| [MemberUpdated](AbstractGuildedClient.MemberUpdated 'Guilded.NET.AbstractGuildedClient.MemberUpdated') | An event that occurs once a member gets updated. |
| [MessageCreated](AbstractGuildedClient.MessageCreated 'Guilded.NET.AbstractGuildedClient.MessageCreated') | An event that occurs once someone creates a message. |
| [MessageDeleted](AbstractGuildedClient.MessageDeleted 'Guilded.NET.AbstractGuildedClient.MessageDeleted') | An event that occurs once someone deletes a message. |
| [MessageUpdated](AbstractGuildedClient.MessageUpdated 'Guilded.NET.AbstractGuildedClient.MessageUpdated') | An event that occurs once someone edits a message. |
| [Resume](AbstractGuildedClient.Resume 'Guilded.NET.AbstractGuildedClient.Resume') | Event that occurs when client passes last event message identifier. |
| [RolesUpdated](AbstractGuildedClient.RolesUpdated 'Guilded.NET.AbstractGuildedClient.RolesUpdated') | An event that occurs once someone receives or loses a role. |
| [Welcome](AbstractGuildedClient.Welcome 'Guilded.NET.AbstractGuildedClient.Welcome') | An event that is received once WebSocket is initiated. |
| [XpAdded](AbstractGuildedClient.XpAdded 'Guilded.NET.AbstractGuildedClient.XpAdded') | An event that occurs once XP is given to a set of users. |

| Events | |
| :--- | :--- |
| [Prepared](AbstractGuildedClient.Prepared 'Guilded.NET.AbstractGuildedClient.Prepared') | An event when the client is prepared. |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(HashId, HashId)](AbstractGuildedClient.AddMembershipAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.AddMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Adds a member to the group. |
| [AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.AddReactionAsync(Guid,Guid,uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to the message. |
| [AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient.AddReactionAsync(Guid,uint,uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, uint, uint)') | Adds a reaction to the content. |
| [AddRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.AddRoleAsync(HashId,HashId,uint) 'Guilded.NET.AbstractGuildedClient.AddRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)') | Adds a role to the user. |
| [AddXpAsync(HashId, HashId, long)](AbstractGuildedClient.AddXpAsync(HashId,HashId,long) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, long)') | Adds XP to the user. |
| [AddXpAsync(HashId, uint, long)](AbstractGuildedClient.AddXpAsync(HashId,uint,long) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.HashId, uint, long)') | Adds XP to the role. |
| [ConnectAsync()](AbstractGuildedClient.ConnectAsync() 'Guilded.NET.AbstractGuildedClient.ConnectAsync()') | Connects this client to Guilded. |
| [CreatedDocAsync(Guid, string, string)](AbstractGuildedClient.CreatedDocAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreatedDocAsync(System.Guid, string, string)') | Creates a document in document list. |
| [CreateForumThreadAsync(Guid, string, string)](AbstractGuildedClient.CreateForumThreadAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a thread in forums. |
| [CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,string,IList_Embed_) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](AbstractGuildedClient.CreateHookMessageAsync(Guid,string,IList_Embed_) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, System.Collections.Generic.IList<Guilded.NET.Base.Embeds.Embed>)') | Creates a message in a chat using provided webhook. |
| [CreateListItemAsync(Guid, string, string)](AbstractGuildedClient.CreateListItemAsync(Guid,string,string) 'Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates an item in the list. |
| [CreateMessageAsync(Guid, MessageContent)](AbstractGuildedClient.CreateMessageAsync(Guid,MessageContent) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, Guilded.NET.Base.Content.MessageContent)') | Creates a message in chat. |
| [DeleteDocAsync(Guid, uint)](AbstractGuildedClient.DeleteDocAsync(Guid,uint) 'Guilded.NET.AbstractGuildedClient.DeleteDocAsync(System.Guid, uint)') | Deletes the document. |
| [DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient.DeleteMessageAsync(Guid,Guid) 'Guilded.NET.AbstractGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes the message. |
| [DeleteNicknameAsync(HashId, HashId)](AbstractGuildedClient.DeleteNicknameAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Deletes member's nickname. |
| [DisconnectAsync()](AbstractGuildedClient.DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded. |
| [Dispose()](AbstractGuildedClient.Dispose() 'Guilded.NET.AbstractGuildedClient.Dispose()') | Disposes [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient') instance. |
| [GetDocAsync(Guid, uint)](AbstractGuildedClient.GetDocAsync(Guid,uint) 'Guilded.NET.AbstractGuildedClient.GetDocAsync(System.Guid, uint)') | Gets the specified document. |
| [GetDocsAsync(Guid)](AbstractGuildedClient.GetDocsAsync(Guid) 'Guilded.NET.AbstractGuildedClient.GetDocsAsync(System.Guid)') | Gets a list of documents. |
| [GetMemberRolesAsync(HashId, HashId)](AbstractGuildedClient.GetMemberRolesAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Gets the member's roles. |
| [GetMessageAsync(Guid, Guid)](AbstractGuildedClient.GetMessageAsync(Guid,Guid) 'Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message. |
| [GetMessagesAsync(Guid, bool)](AbstractGuildedClient.GetMessagesAsync(Guid,bool) 'Guilded.NET.AbstractGuildedClient.GetMessagesAsync(System.Guid, bool)') | Gets a set of messages. |
| [GetSocialLinkAsync(HashId, HashId, SocialLinkType)](AbstractGuildedClient.GetSocialLinkAsync(HashId,HashId,SocialLinkType) 'Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, Guilded.NET.Base.Users.SocialLinkType)') | Gets the specified user's social links. |
| [OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient.OnSocketMessage(GuildedSocketMessage) 'Guilded.NET.AbstractGuildedClient.OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage)') | When the socket message event is invoked. |
| [RemoveMembershipAsync(HashId, HashId)](AbstractGuildedClient.RemoveMembershipAsync(HashId,HashId) 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId)') | Removes a member from the group. |
| [RemoveReactionAsync(Guid, Guid, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,Guid,uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from the message. |
| [RemoveReactionAsync(Guid, uint, uint)](AbstractGuildedClient.RemoveReactionAsync(Guid,uint,uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)') | Removes a reaction from the content. |
| [RemoveRoleAsync(HashId, HashId, uint)](AbstractGuildedClient.RemoveRoleAsync(HashId,HashId,uint) 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, uint)') | Removes a role from the user. |
| [UpdateDocAsync(Guid, uint, string, string)](AbstractGuildedClient.UpdateDocAsync(Guid,uint,string,string) 'Guilded.NET.AbstractGuildedClient.UpdateDocAsync(System.Guid, uint, string, string)') | Updates the document. |
| [UpdateMessageAsync(Guid, Guid, string)](AbstractGuildedClient.UpdateMessageAsync(Guid,Guid,string) 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the message. |
| [UpdateNicknameAsync(HashId, HashId, string)](AbstractGuildedClient.UpdateNicknameAsync(HashId,HashId,string) 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.HashId, string)') | Updates the member's nickname. |

### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')