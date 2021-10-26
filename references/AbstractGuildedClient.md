
#### [Guilded.NET](Guilded_NET 'Guilded.NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET')
## AbstractGuildedClient Class

A base for all Guilded clients.
```csharp
public abstract class AbstractGuildedClient : Guilded.NET.Base.BaseGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseGuildedClient](https://guilded-net.github.io/references/BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#x27A1; AbstractGuildedClient

Derived  
&#8627; [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')

### Remarks
  
A base class for [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') and soon other clients.  
  
There is not much to be used here. It is recommended to use [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient').

### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')

| Constructors | |
| :--- | :--- |
| [AbstractGuildedClient()](AbstractGuildedClient_AbstractGuildedClient() 'Guilded.NET.AbstractGuildedClient.AbstractGuildedClient()') | A base constructor for creating Guilded clients. |

| Fields | |
| :--- | :--- |
| [PreparedEvent](AbstractGuildedClient_PreparedEvent 'Guilded.NET.AbstractGuildedClient.PreparedEvent') | An event when the client is prepared. |

| Properties | |
| :--- | :--- |
| [GuildedEvents](AbstractGuildedClient_GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents') | A dictionary of Guilded events. |
| [MemberUpdated](AbstractGuildedClient_MemberUpdated 'Guilded.NET.AbstractGuildedClient.MemberUpdated') | An event that occurs once a member gets updated. |
| [MessageCreated](AbstractGuildedClient_MessageCreated 'Guilded.NET.AbstractGuildedClient.MessageCreated') | An event that occurs once someone creates a message. |
| [MessageDeleted](AbstractGuildedClient_MessageDeleted 'Guilded.NET.AbstractGuildedClient.MessageDeleted') | An event that occurs once someone deletes a message. |
| [MessageUpdated](AbstractGuildedClient_MessageUpdated 'Guilded.NET.AbstractGuildedClient.MessageUpdated') | An event that occurs once someone edits a message. |
| [Pong](AbstractGuildedClient_Pong 'Guilded.NET.AbstractGuildedClient.Pong') | Event that occurs when pong is received. |
| [Resume](AbstractGuildedClient_Resume 'Guilded.NET.AbstractGuildedClient.Resume') | Event that occurs when client passes last event message identifier. |
| [RolesUpdated](AbstractGuildedClient_RolesUpdated 'Guilded.NET.AbstractGuildedClient.RolesUpdated') | An event that occurs once someone receives or loses a role. |
| [Welcome](AbstractGuildedClient_Welcome 'Guilded.NET.AbstractGuildedClient.Welcome') | An event that is received once WebSocket is initiated. |
| [XpAdded](AbstractGuildedClient_XpAdded 'Guilded.NET.AbstractGuildedClient.XpAdded') | An event that occurs once XP is given to a set of users. |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(GId, GId)](AbstractGuildedClient_AddMembershipAsync(GId_GId) 'Guilded.NET.AbstractGuildedClient.AddMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Adds a member to the group. |
| [AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient_AddReactionAsync(Guid_Guid_uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to the message. |
| [AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient_AddReactionAsync(Guid_uint_uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, uint, uint)') | Adds a reaction to the content. |
| [AddRoleAsync(GId, uint)](AbstractGuildedClient_AddRoleAsync(GId_uint) 'Guilded.NET.AbstractGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint)') | Adds a role to the user. |
| [AddXpAsync(GId, long)](AbstractGuildedClient_AddXpAsync(GId_long) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.GId, long)') | Adds XP to the user. |
| [AddXpAsync(uint, long)](AbstractGuildedClient_AddXpAsync(uint_long) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(uint, long)') | Adds XP to the role. |
| [ConnectAsync()](AbstractGuildedClient_ConnectAsync() 'Guilded.NET.AbstractGuildedClient.ConnectAsync()') | Connects this client to Guilded. |
| [CreateForumThreadAsync(Guid, string, string)](AbstractGuildedClient_CreateForumThreadAsync(Guid_string_string) 'Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a thread in forums. |
| [CreateHookMessageAsync(Guid, string, string, IList&lt;Embed&gt;)](AbstractGuildedClient_CreateHookMessageAsync(Guid_string_string_IList_Embed_) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.Embed&gt;)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, string)](AbstractGuildedClient_CreateHookMessageAsync(Guid_string_string) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, string)') | Creates a message in a chat using provided webhook. |
| [CreateHookMessageAsync(Guid, string, IList&lt;Embed&gt;)](AbstractGuildedClient_CreateHookMessageAsync(Guid_string_IList_Embed_) 'Guilded.NET.AbstractGuildedClient.CreateHookMessageAsync(System.Guid, string, System.Collections.Generic.IList&lt;Guilded.NET.Base.Embeds.Embed&gt;)') | Creates a message in a chat using provided webhook. |
| [CreateListItemAsync(Guid, string, string)](AbstractGuildedClient_CreateListItemAsync(Guid_string_string) 'Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates an item in the list. |
| [CreateMessageAsync(Guid, string, bool, Guid[])](AbstractGuildedClient_CreateMessageAsync(Guid_string_bool_Guid__) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, bool, System.Guid[])') | Creates a message in the chat. |
| [CreateMessageAsync(Guid, string, Guid[])](AbstractGuildedClient_CreateMessageAsync(Guid_string_Guid__) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[])') | Creates a message in the chat. |
| [CreateMessageAsync(Guid, string)](AbstractGuildedClient_CreateMessageAsync(Guid_string) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in the chat. |
| [DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient_DeleteMessageAsync(Guid_Guid) 'Guilded.NET.AbstractGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes the message. |
| [DeleteNicknameAsync(GId)](AbstractGuildedClient_DeleteNicknameAsync(GId) 'Guilded.NET.AbstractGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.GId)') | Deletes member's nickname. |
| [DisconnectAsync()](AbstractGuildedClient_DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded. |
| [Dispose()](AbstractGuildedClient_Dispose() 'Guilded.NET.AbstractGuildedClient.Dispose()') | Disposes [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient') instance. |
| [GetMemberRolesAsync(GId)](AbstractGuildedClient_GetMemberRolesAsync(GId) 'Guilded.NET.AbstractGuildedClient.GetMemberRolesAsync(Guilded.NET.Base.GId)') | Gets the member's roles. |
| [GetMessageAsync(Guid, Guid)](AbstractGuildedClient_GetMessageAsync(Guid_Guid) 'Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message. |
| [GetMessagesAsync(Guid, bool)](AbstractGuildedClient_GetMessagesAsync(Guid_bool) 'Guilded.NET.AbstractGuildedClient.GetMessagesAsync(System.Guid, bool)') | Gets a set of messages. |
| [GetSocialLinkAsync(GId, SocialLinkType)](AbstractGuildedClient_GetSocialLinkAsync(GId_SocialLinkType) 'Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.GId, Guilded.NET.Base.Users.SocialLinkType)') | Gets the specified user's social links. |
| [OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient_OnSocketMessage(GuildedSocketMessage) 'Guilded.NET.AbstractGuildedClient.OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage)') | When the socket message event is invoked. |
| [RemoveMembershipAsync(GId, GId)](AbstractGuildedClient_RemoveMembershipAsync(GId_GId) 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Removes a member from the group. |
| [RemoveReactionAsync(Guid, Guid, uint)](AbstractGuildedClient_RemoveReactionAsync(Guid_Guid_uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from the message. |
| [RemoveReactionAsync(Guid, uint, uint)](AbstractGuildedClient_RemoveReactionAsync(Guid_uint_uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)') | Removes a reaction from the content. |
| [RemoveRoleAsync(GId, uint)](AbstractGuildedClient_RemoveRoleAsync(GId_uint) 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint)') | Removes a role from the user. |
| [UpdateMessageAsync(Guid, Guid, string)](AbstractGuildedClient_UpdateMessageAsync(Guid_Guid_string) 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the message. |
| [UpdateNicknameAsync(GId, string)](AbstractGuildedClient_UpdateNicknameAsync(GId_string) 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string)') | Updates the member's nickname. |

| Events | |
| :--- | :--- |
| [Prepared](AbstractGuildedClient_Prepared 'Guilded.NET.AbstractGuildedClient.Prepared') | An event when the client is prepared. |
