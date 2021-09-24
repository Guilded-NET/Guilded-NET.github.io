
#### [Guilded.NET.Base](Guilded_NET_Base 'Guilded_NET_Base')
### Namespaces
<a name='Guilded_NET_Base'></a>
## Guilded.NET.Base Namespace

| Classes | |
| :--- | :--- |
| [BaseGuildedClient](BaseGuildedClient 'Guilded.NET.Base.BaseGuildedClient') | An API wrapping layer for all Guilded client.<br/> |
| [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') | The base for all Guilded models.<br/> |
| [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') | A base that with a parent client.<br/> |
| [DecimalColorConverter](DecimalColorConverter 'Guilded.NET.Base.DecimalColorConverter') | Converts [System.Drawing.Color](https://docs.microsoft.com/en-us/dotnet/api/System.Drawing.Color 'System.Drawing.Color') to an integer in RGB format.<br/> |
| [FormIdConverter](FormIdConverter 'Guilded.NET.Base.FormIdConverter') | Converts a value to [FormId](FormId 'Guilded.NET.Base.FormId') where it is expected.<br/> |
| [GIdConverter](GIdConverter 'Guilded.NET.Base.GIdConverter') | Converts a value to [GId](GId 'Guilded.NET.Base.GId') where it is expected.<br/> |
| [GuildedAuthorizationException](GuildedAuthorizationException 'Guilded.NET.Base.GuildedAuthorizationException') | An authorization exception thrown by Guilded API.<br/> |
| [GuildedException](GuildedException 'Guilded.NET.Base.GuildedException') | An exception thrown by Guilded API.<br/> |
| [GuildedPermissionException](GuildedPermissionException 'Guilded.NET.Base.GuildedPermissionException') | A permission exception thrown by Guilded API.<br/> |
| [GuildedRequestException](GuildedRequestException 'Guilded.NET.Base.GuildedRequestException') | A bad request exception thrown by Guilded API.<br/> |
| [GuildedResourceException](GuildedResourceException 'Guilded.NET.Base.GuildedResourceException') | A resource exception thrown by Guilded API.<br/> |
| [GuildedUrl](GuildedUrl 'Guilded.NET.Base.GuildedUrl') | Defines a list of URLs to Guilded services.<br/> |
| [GuildedWebsocketException](GuildedWebsocketException 'Guilded.NET.Base.GuildedWebsocketException') | An error received from Guilded WebSocket.<br/> |
| [IdConverter](IdConverter 'Guilded.NET.Base.IdConverter') | Converts [GId](GId 'Guilded.NET.Base.GId') to string or vice versa in a JSON.<br/> |

| Structs | |
| :--- | :--- |
| [FormId](FormId 'Guilded.NET.Base.FormId') | An identifier for forms and media uploads.<br/> |
| [GId](GId 'Guilded.NET.Base.GId') | An identifier for Guilded teams, users, etc.<br/> |
  
<a name='Guilded_NET_Base_Content'></a>
## Guilded.NET.Base.Content Namespace

| Classes | |
| :--- | :--- |
| [ChannelContent&lt;T&gt;](ChannelContent_T_ 'Guilded.NET.Base.Content.ChannelContent&lt;T&gt;') | The base type for channel contents.<br/> |
| [ForumThread](ForumThread 'Guilded.NET.Base.Content.ForumThread') | A forum thread in a forum channel.<br/> |
| [ListItem](ListItem 'Guilded.NET.Base.Content.ListItem') | A list item in a list channel.<br/> |
| [Message](Message 'Guilded.NET.Base.Content.Message') | A message posted in the chat.<br/> |
| [Reaction](Reaction 'Guilded.NET.Base.Content.Reaction') | The information about a reaction.<br/> |

| Enums | |
| :--- | :--- |
| [MessageType](MessageType 'Guilded.NET.Base.Content.MessageType') | The type of the message created or updated.<br/> |
  
<a name='Guilded_NET_Base_Embeds'></a>
## Guilded.NET.Base.Embeds Namespace

| Classes | |
| :--- | :--- |
| [Embed](Embed 'Guilded.NET.Base.Embeds.Embed') | A custom content embed that represents any kind of information.<br/> |
| [EmbedAuthor](EmbedAuthor 'Guilded.NET.Base.Embeds.EmbedAuthor') | The provided information about embed author.<br/> |
| [EmbedField](EmbedField 'Guilded.NET.Base.Embeds.EmbedField') | A field in an embed.<br/> |
| [EmbedFooter](EmbedFooter 'Guilded.NET.Base.Embeds.EmbedFooter') | The footer of an embed.<br/> |
| [EmbedMedia](EmbedMedia 'Guilded.NET.Base.Embeds.EmbedMedia') | The media found in an embed.<br/> |
  
<a name='Guilded_NET_Base_Events'></a>
## Guilded.NET.Base.Events Namespace

| Classes | |
| :--- | :--- |
| [GuildedSocketMessage](GuildedSocketMessage 'Guilded.NET.Base.Events.GuildedSocketMessage') | Message that was received from a WebSocket client.<br/> |
| [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent') | An event that occurs once a member gets updated.<br/> |
| [MessageCreatedEvent](MessageCreatedEvent 'Guilded.NET.Base.Events.MessageCreatedEvent') | An event that occurs once someone creates a message.<br/> |
| [MessageDeletedEvent](MessageDeletedEvent 'Guilded.NET.Base.Events.MessageDeletedEvent') | An event that occurs once someone deletes a message.<br/> |
| [MessageDeletedEvent.MessageDeleted](MessageDeletedEvent_MessageDeleted 'Guilded.NET.Base.Events.MessageDeletedEvent.MessageDeleted') | A message that was recently deleted/removed.<br/> |
| [MessageEvent](MessageEvent 'Guilded.NET.Base.Events.MessageEvent') | The base for message-related events.<br/> |
| [MessageEvent&lt;T&gt;](MessageEvent_T_ 'Guilded.NET.Base.Events.MessageEvent&lt;T&gt;') | The base for message-related events.<br/> |
| [MessageUpdatedEvent](MessageUpdatedEvent 'Guilded.NET.Base.Events.MessageUpdatedEvent') | An event that occurs once someone edits a message.<br/> |
| [ResumeEvent](ResumeEvent 'Guilded.NET.Base.Events.ResumeEvent') | Event that occurs when client passes last event message identifier.<br/> |
| [RolesUpdatedEvent](RolesUpdatedEvent 'Guilded.NET.Base.Events.RolesUpdatedEvent') | An event that occurs once someone receives or loses a role.<br/> |
| [RolesUpdatedEvent.RolesUpdated](RolesUpdatedEvent_RolesUpdated 'Guilded.NET.Base.Events.RolesUpdatedEvent.RolesUpdated') | Defines a role list holder and their role list.<br/> |
| [WelcomeEvent](WelcomeEvent 'Guilded.NET.Base.Events.WelcomeEvent') | An event that is received once WebSocket is initiated.<br/> |
| [XpAddedEvent](XpAddedEvent 'Guilded.NET.Base.Events.XpAddedEvent') | An event that occurs once XP is given to a set of users.<br/> |

| Interfaces | |
| :--- | :--- |
| [ITeamEvent](ITeamEvent 'Guilded.NET.Base.Events.ITeamEvent') | A base for all events that may occur in teams.<br/> |
  
<a name='Guilded_NET_Base_Permissions'></a>
## Guilded.NET.Base.Permissions Namespace

| Enums | |
| :--- | :--- |
| [AnnounPermissions](AnnounPermissions 'Guilded.NET.Base.Permissions.AnnounPermissions') | Permissions related to announcements.<br/> |
| [BotPermissions](BotPermissions 'Guilded.NET.Base.Permissions.BotPermissions') | Permissions related to bots.<br/>  |
| [BracketPermissions](BracketPermissions 'Guilded.NET.Base.Permissions.BracketPermissions') | Permissions related to brackets.<br/> |
| [CalendarPermissions](CalendarPermissions 'Guilded.NET.Base.Permissions.CalendarPermissions') | Permissions related to calendar.<br/> |
| [ChatPermissions](ChatPermissions 'Guilded.NET.Base.Permissions.ChatPermissions') | Permissions related to chat.<br/> |
| [CustomPermissions](CustomPermissions 'Guilded.NET.Base.Permissions.CustomPermissions') | Permissions related to customization.<br/> |
| [DocPermissions](DocPermissions 'Guilded.NET.Base.Permissions.DocPermissions') | Permissions related to documents.<br/> |
| [FormPermissions](FormPermissions 'Guilded.NET.Base.Permissions.FormPermissions') | Permissions related to forms & polls.<br/> |
| [ForumPermissions](ForumPermissions 'Guilded.NET.Base.Permissions.ForumPermissions') | Permissions related to forums.<br/> |
| [GeneralPermissions](GeneralPermissions 'Guilded.NET.Base.Permissions.GeneralPermissions') | Permissions related to servers.<br/> |
| [ListPermissions](ListPermissions 'Guilded.NET.Base.Permissions.ListPermissions') | Permissions related to lists.<br/> |
| [MatchmakingPermissions](MatchmakingPermissions 'Guilded.NET.Base.Permissions.MatchmakingPermissions') | Permissions related to matchmaking.<br/> |
| [MediaPermissions](MediaPermissions 'Guilded.NET.Base.Permissions.MediaPermissions') | Permissions related to media.<br/> |
| [RecruitmentPermissions](RecruitmentPermissions 'Guilded.NET.Base.Permissions.RecruitmentPermissions') | Permissions related to recruiting.<br/> |
| [SchedulingPermissions](SchedulingPermissions 'Guilded.NET.Base.Permissions.SchedulingPermissions') | Permissions related to scheduling.<br/> |
| [StreamPermissions](StreamPermissions 'Guilded.NET.Base.Permissions.StreamPermissions') | Permissions related to streaming.<br/> |
| [VoicePermissions](VoicePermissions 'Guilded.NET.Base.Permissions.VoicePermissions') | Permissions related to voice.<br/> |
| [XPPermissions](XPPermissions 'Guilded.NET.Base.Permissions.XPPermissions') | Permissions related to XP.<br/> |
  
<a name='Guilded_NET_Base_Teams'></a>
## Guilded.NET.Base.Teams Namespace

| Classes | |
| :--- | :--- |
| [Member](Member 'Guilded.NET.Base.Teams.Member') | A member in a member list.<br/> |
  
<a name='Guilded_NET_Base_Users'></a>
## Guilded.NET.Base.Users Namespace

| Classes | |
| :--- | :--- |
| [SocialLink](SocialLink 'Guilded.NET.Base.Users.SocialLink') | A social media link.<br/> |

| Enums | |
| :--- | :--- |
| [SocialLinkType](SocialLinkType 'Guilded.NET.Base.Users.SocialLinkType') | The type of social link.<br/> |
  
