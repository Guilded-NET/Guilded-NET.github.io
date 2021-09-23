
#### [Guilded.NET](Guilded_NET 'Guilded_NET')
### [Guilded.NET](Guilded_NET#Guilded_NET 'Guilded.NET')
## AbstractGuildedClient Class
A base for all Guilded clients.  
```csharp
public abstract class AbstractGuildedClient : Guilded.NET.Base.BaseGuildedClient
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#x27A1; [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') &#x27A1; AbstractGuildedClient  

Derived  
&#8627; [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')  
### Remarks
A base class for [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient') and soon other clients.



There is not much to be used here. It is recommended to use [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient').

| Constructors | |
| :--- | :--- |
| [AbstractGuildedClient()](AbstractGuildedClient_AbstractGuildedClient() 'Guilded.NET.AbstractGuildedClient.AbstractGuildedClient()') | A base constructor for creating Guilded clients.<br/> |

| Fields | |
| :--- | :--- |
| [PreparedEvent](AbstractGuildedClient_PreparedEvent 'Guilded.NET.AbstractGuildedClient.PreparedEvent') | An event when the client is prepared.<br/> |

| Properties | |
| :--- | :--- |
| [GuildedEvents](AbstractGuildedClient_GuildedEvents 'Guilded.NET.AbstractGuildedClient.GuildedEvents') | A dictionary of Guilded events.<br/> |
| [MemberUpdated](AbstractGuildedClient_MemberUpdated 'Guilded.NET.AbstractGuildedClient.MemberUpdated') | An event that occurs once a member gets updated.<br/> |
| [MessageCreated](AbstractGuildedClient_MessageCreated 'Guilded.NET.AbstractGuildedClient.MessageCreated') | An event that occurs once someone creates a message.<br/> |
| [MessageDeleted](AbstractGuildedClient_MessageDeleted 'Guilded.NET.AbstractGuildedClient.MessageDeleted') | An event that occurs once someone deletes a message.<br/> |
| [MessageUpdated](AbstractGuildedClient_MessageUpdated 'Guilded.NET.AbstractGuildedClient.MessageUpdated') | An event that occurs once someone edits a message.<br/> |
| [Resume](AbstractGuildedClient_Resume 'Guilded.NET.AbstractGuildedClient.Resume') | Event that occurs when client passes last event message identifier.<br/> |
| [RolesUpdated](AbstractGuildedClient_RolesUpdated 'Guilded.NET.AbstractGuildedClient.RolesUpdated') | An event that occurs once someone receives or loses a role.<br/> |
| [Welcome](AbstractGuildedClient_Welcome 'Guilded.NET.AbstractGuildedClient.Welcome') | An event that is received once WebSocket is initiated.<br/> |
| [XpAdded](AbstractGuildedClient_XpAdded 'Guilded.NET.AbstractGuildedClient.XpAdded') | An event that occurs once XP is given to a set of users.<br/> |

| Methods | |
| :--- | :--- |
| [AddMembershipAsync(GId, GId)](AbstractGuildedClient_AddMembershipAsync(GId_GId) 'Guilded.NET.AbstractGuildedClient.AddMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Adds a member to the group.<br/> |
| [AddReactionAsync(Guid, Guid, uint)](AbstractGuildedClient_AddReactionAsync(Guid_Guid_uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, System.Guid, uint)') | Adds a reaction to a message.<br/> |
| [AddReactionAsync(Guid, uint, uint)](AbstractGuildedClient_AddReactionAsync(Guid_uint_uint) 'Guilded.NET.AbstractGuildedClient.AddReactionAsync(System.Guid, uint, uint)') | Adds a reaction to the content.<br/> |
| [AddRoleAsync(GId, uint)](AbstractGuildedClient_AddRoleAsync(GId_uint) 'Guilded.NET.AbstractGuildedClient.AddRoleAsync(Guilded.NET.Base.GId, uint)') | Adds a role to the given user.<br/> |
| [AddXpAsync(GId, short)](AbstractGuildedClient_AddXpAsync(GId_short) 'Guilded.NET.AbstractGuildedClient.AddXpAsync(Guilded.NET.Base.GId, short)') | Adds XP to the given user.<br/> |
| [AttachRoleLevelAsync(uint, long)](AbstractGuildedClient_AttachRoleLevelAsync(uint_long) 'Guilded.NET.AbstractGuildedClient.AttachRoleLevelAsync(uint, long)') | Attaches amount of XP required to a role.<br/> |
| [ConnectAsync()](AbstractGuildedClient_ConnectAsync() 'Guilded.NET.AbstractGuildedClient.ConnectAsync()') | Connects this client to Guilded.<br/> |
| [CreateForumThreadAsync(Guid, string, string)](AbstractGuildedClient_CreateForumThreadAsync(Guid_string_string) 'Guilded.NET.AbstractGuildedClient.CreateForumThreadAsync(System.Guid, string, string)') | Creates a forum thread.<br/> |
| [CreateListItemAsync(Guid, string, string)](AbstractGuildedClient_CreateListItemAsync(Guid_string_string) 'Guilded.NET.AbstractGuildedClient.CreateListItemAsync(System.Guid, string, string)') | Creates a list item.<br/> |
| [CreateMessageAsync(Guid, string, bool, Guid[])](AbstractGuildedClient_CreateMessageAsync(Guid_string_bool_Guid__) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, bool, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string, Guid[])](AbstractGuildedClient_CreateMessageAsync(Guid_string_Guid__) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string, System.Guid[])') | Creates a message in a chat.<br/> |
| [CreateMessageAsync(Guid, string)](AbstractGuildedClient_CreateMessageAsync(Guid_string) 'Guilded.NET.AbstractGuildedClient.CreateMessageAsync(System.Guid, string)') | Creates a message in a chat.<br/> |
| [DeleteMessageAsync(Guid, Guid)](AbstractGuildedClient_DeleteMessageAsync(Guid_Guid) 'Guilded.NET.AbstractGuildedClient.DeleteMessageAsync(System.Guid, System.Guid)') | Deletes a specified message.<br/> |
| [DeleteNicknameAsync(GId)](AbstractGuildedClient_DeleteNicknameAsync(GId) 'Guilded.NET.AbstractGuildedClient.DeleteNicknameAsync(Guilded.NET.Base.GId)') | Deletes member's nickname.<br/> |
| [DisconnectAsync()](AbstractGuildedClient_DisconnectAsync() 'Guilded.NET.AbstractGuildedClient.DisconnectAsync()') | Disconnects this client from Guilded.<br/> |
| [Dispose()](AbstractGuildedClient_Dispose() 'Guilded.NET.AbstractGuildedClient.Dispose()') | Disposes [AbstractGuildedClient](AbstractGuildedClient 'Guilded.NET.AbstractGuildedClient') instance.<br/> |
| [GetMessageAsync(Guid, Guid)](AbstractGuildedClient_GetMessageAsync(Guid_Guid) 'Guilded.NET.AbstractGuildedClient.GetMessageAsync(System.Guid, System.Guid)') | Gets a message in a specific channel.<br/> |
| [GetMessagesAsync(Guid, uint)](AbstractGuildedClient_GetMessagesAsync(Guid_uint) 'Guilded.NET.AbstractGuildedClient.GetMessagesAsync(System.Guid, uint)') | Gets messages with a specific limit.<br/> |
| [GetSocialLinkAsync(GId, SocialLinkType)](AbstractGuildedClient_GetSocialLinkAsync(GId_SocialLinkType) 'Guilded.NET.AbstractGuildedClient.GetSocialLinkAsync(Guilded.NET.Base.GId, Guilded.NET.Base.Users.SocialLinkType)') | Gets user's social links.<br/> |
| [OnSocketMessage(GuildedSocketMessage)](AbstractGuildedClient_OnSocketMessage(GuildedSocketMessage) 'Guilded.NET.AbstractGuildedClient.OnSocketMessage(Guilded.NET.Base.Events.GuildedSocketMessage)') | When the socket message event is invoked.<br/> |
| [RemoveMembershipAsync(GId, GId)](AbstractGuildedClient_RemoveMembershipAsync(GId_GId) 'Guilded.NET.AbstractGuildedClient.RemoveMembershipAsync(Guilded.NET.Base.GId, Guilded.NET.Base.GId)') | Removes a member from the group.<br/> |
| [RemoveReactionAsync(Guid, Guid, uint)](AbstractGuildedClient_RemoveReactionAsync(Guid_Guid_uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, System.Guid, uint)') | Removes a reaction from a message.<br/> |
| [RemoveReactionAsync(Guid, uint, uint)](AbstractGuildedClient_RemoveReactionAsync(Guid_uint_uint) 'Guilded.NET.AbstractGuildedClient.RemoveReactionAsync(System.Guid, uint, uint)') | Removes a reaction from the content.<br/> |
| [RemoveRoleAsync(GId, uint)](AbstractGuildedClient_RemoveRoleAsync(GId_uint) 'Guilded.NET.AbstractGuildedClient.RemoveRoleAsync(Guilded.NET.Base.GId, uint)') | Removes a role from the given user.<br/> |
| [UpdateMessageAsync(Guid, Guid, string)](AbstractGuildedClient_UpdateMessageAsync(Guid_Guid_string) 'Guilded.NET.AbstractGuildedClient.UpdateMessageAsync(System.Guid, System.Guid, string)') | Updates the contents of the message.<br/> |
| [UpdateNicknameAsync(GId, string)](AbstractGuildedClient_UpdateNicknameAsync(GId_string) 'Guilded.NET.AbstractGuildedClient.UpdateNicknameAsync(Guilded.NET.Base.GId, string)') | Updates member's nickname.<br/> |

| Events | |
| :--- | :--- |
| [Prepared](AbstractGuildedClient_Prepared 'Guilded.NET.AbstractGuildedClient.Prepared') | An event when the client is prepared.<br/> |

#### See Also
- [GuildedBotClient](GuildedBotClient 'Guilded.NET.GuildedBotClient')
