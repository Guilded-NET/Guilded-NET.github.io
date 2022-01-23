---
title: Guilded.NET.Base.Permissions
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.NET.Base.Permissions Namespace
- **[AnnouncementPermissions](AnnouncementPermissions 'Guilded.NET.Base.Permissions.AnnouncementPermissions')** `Enum`
  Permissions related to announcements.
  - **[All](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.All 'Guilded.NET.Base.Permissions.AnnouncementPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.Basic 'Guilded.NET.Base.Permissions.AnnouncementPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateAnnouncements](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.CreateAnnouncements 'Guilded.NET.Base.Permissions.AnnouncementPermissions.CreateAnnouncements')** `Field`
    Allows you to create and remove announcements
  - **[Manage](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.Manage 'Guilded.NET.Base.Permissions.AnnouncementPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageAnnouncements](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.ManageAnnouncements 'Guilded.NET.Base.Permissions.AnnouncementPermissions.ManageAnnouncements')** `Field`
    Allows you to delete announcements by other members or pin any announcement
  - **[None](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.None 'Guilded.NET.Base.Permissions.AnnouncementPermissions.None')** `Field`
    No given permissions.
  - **[ViewAnnouncements](AnnouncementPermissions#Guilded.NET.Base.Permissions.AnnouncementPermissions.ViewAnnouncements 'Guilded.NET.Base.Permissions.AnnouncementPermissions.ViewAnnouncements')** `Field`
    Allows you to view announcements
- **[BotPermissions](BotPermissions 'Guilded.NET.Base.Permissions.BotPermissions')** `Enum`
  Permissions related to bots.
  - **[All](BotPermissions#Guilded.NET.Base.Permissions.BotPermissions.All 'Guilded.NET.Base.Permissions.BotPermissions.All')** `Field`
    All of the permissions combined.
  - **[ManageBots](BotPermissions#Guilded.NET.Base.Permissions.BotPermissions.ManageBots 'Guilded.NET.Base.Permissions.BotPermissions.ManageBots')** `Field`
    Allows you to create and edit bots for automated workflows.  
    NOTE: For now, bots do not enforce permissions. Anyone with this permission  
    can create bots to work around their role's existing permissions.
  - **[None](BotPermissions#Guilded.NET.Base.Permissions.BotPermissions.None 'Guilded.NET.Base.Permissions.BotPermissions.None')** `Field`
    No given permissions.
- **[BracketPermissions](BracketPermissions 'Guilded.NET.Base.Permissions.BracketPermissions')** `Enum`
  Permissions related to brackets.
  - **[All](BracketPermissions#Guilded.NET.Base.Permissions.BracketPermissions.All 'Guilded.NET.Base.Permissions.BracketPermissions.All')** `Field`
    All of the permissions combined.
  - **[None](BracketPermissions#Guilded.NET.Base.Permissions.BracketPermissions.None 'Guilded.NET.Base.Permissions.BracketPermissions.None')** `Field`
    No given permissions.
  - **[ReportScores](BracketPermissions#Guilded.NET.Base.Permissions.BracketPermissions.ReportScores 'Guilded.NET.Base.Permissions.BracketPermissions.ReportScores')** `Field`
    Allows you to report match scores on behalf of your server
  - **[ViewBrackets](BracketPermissions#Guilded.NET.Base.Permissions.BracketPermissions.ViewBrackets 'Guilded.NET.Base.Permissions.BracketPermissions.ViewBrackets')** `Field`
    Allows you to view tournament brackets
- **[CalendarPermissions](CalendarPermissions 'Guilded.NET.Base.Permissions.CalendarPermissions')** `Enum`
  Permissions related to calendar.
  - **[All](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.All 'Guilded.NET.Base.Permissions.CalendarPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.Basic 'Guilded.NET.Base.Permissions.CalendarPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.CreateEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.CreateEvents')** `Field`
    Allows you to create events
  - **[EditRSVPs](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.EditRSVPs 'Guilded.NET.Base.Permissions.CalendarPermissions.EditRSVPs')** `Field`
    Allows you to edit RSVP status for members in an event
  - **[Manage](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.Manage 'Guilded.NET.Base.Permissions.CalendarPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.ManageEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.ManageEvents')** `Field`
    Allows you to update events created by others and move them to other channel
  - **[None](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.None 'Guilded.NET.Base.Permissions.CalendarPermissions.None')** `Field`
    No given permissions.
  - **[RemoveEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.RemoveEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.RemoveEvents')** `Field`
    Allows you to remove events created by others
  - **[ViewEvents](CalendarPermissions#Guilded.NET.Base.Permissions.CalendarPermissions.ViewEvents 'Guilded.NET.Base.Permissions.CalendarPermissions.ViewEvents')** `Field`
    Allows you to view events
- **[ChatPermissions](ChatPermissions 'Guilded.NET.Base.Permissions.ChatPermissions')** `Enum`
  Permissions related to chat.
  - **[All](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.All 'Guilded.NET.Base.Permissions.ChatPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.Basic 'Guilded.NET.Base.Permissions.ChatPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateThreads](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.CreateThreads 'Guilded.NET.Base.Permissions.ChatPermissions.CreateThreads')** `Field`
    Allows you to create threads in the channel
  - **[Manage](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.Manage 'Guilded.NET.Base.Permissions.ChatPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.ManageMessages 'Guilded.NET.Base.Permissions.ChatPermissions.ManageMessages')** `Field`
    Allows you to delete chat messages by other members or pin any message
  - **[ManageThreads](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.ManageThreads 'Guilded.NET.Base.Permissions.ChatPermissions.ManageThreads')** `Field`
    Allows you to archive and restore threads
  - **[None](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.None 'Guilded.NET.Base.Permissions.ChatPermissions.None')** `Field`
    No given permissions.
  - **[ReadMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.ReadMessages 'Guilded.NET.Base.Permissions.ChatPermissions.ReadMessages')** `Field`
    Allows you to read chat messages
  - **[SendMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.SendMessages 'Guilded.NET.Base.Permissions.ChatPermissions.SendMessages')** `Field`
    Allows you to send chat messages
  - **[SendThreadMessages](ChatPermissions#Guilded.NET.Base.Permissions.ChatPermissions.SendThreadMessages 'Guilded.NET.Base.Permissions.ChatPermissions.SendThreadMessages')** `Field`
    Allows you to reply to threads in the channel
- **[CustomPermissions](CustomPermissions 'Guilded.NET.Base.Permissions.CustomPermissions')** `Enum`
  Permissions related to customization.
  - **[All](CustomPermissions#Guilded.NET.Base.Permissions.CustomPermissions.All 'Guilded.NET.Base.Permissions.CustomPermissions.All')** `Field`
    All of the permissions combined.
  - **[ChangeNickname](CustomPermissions#Guilded.NET.Base.Permissions.CustomPermissions.ChangeNickname 'Guilded.NET.Base.Permissions.CustomPermissions.ChangeNickname')** `Field`
    Members with this permission can change their own nickname.
  - **[ManageEmoji](CustomPermissions#Guilded.NET.Base.Permissions.CustomPermissions.ManageEmoji 'Guilded.NET.Base.Permissions.CustomPermissions.ManageEmoji')** `Field`
    Allows the creation and management of server emoji
  - **[ManageNicknames](CustomPermissions#Guilded.NET.Base.Permissions.CustomPermissions.ManageNicknames 'Guilded.NET.Base.Permissions.CustomPermissions.ManageNicknames')** `Field`
    Members with this permission can change the nickname of others.
  - **[None](CustomPermissions#Guilded.NET.Base.Permissions.CustomPermissions.None 'Guilded.NET.Base.Permissions.CustomPermissions.None')** `Field`
    No given permissions.
- **[DocPermissions](DocPermissions 'Guilded.NET.Base.Permissions.DocPermissions')** `Enum`
  Permissions related to documents.
  - **[All](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.All 'Guilded.NET.Base.Permissions.DocPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.Basic 'Guilded.NET.Base.Permissions.DocPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateDocs](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.CreateDocs 'Guilded.NET.Base.Permissions.DocPermissions.CreateDocs')** `Field`
    Allows you to create docs
  - **[Manage](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.Manage 'Guilded.NET.Base.Permissions.DocPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageDocs](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.ManageDocs 'Guilded.NET.Base.Permissions.DocPermissions.ManageDocs')** `Field`
    Allows you to update docs created by others and move them to other channels
  - **[None](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.None 'Guilded.NET.Base.Permissions.DocPermissions.None')** `Field`
    No given permissions.
  - **[RemoveDocs](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.RemoveDocs 'Guilded.NET.Base.Permissions.DocPermissions.RemoveDocs')** `Field`
    Allows you to remove docs created by others
  - **[ViewDocs](DocPermissions#Guilded.NET.Base.Permissions.DocPermissions.ViewDocs 'Guilded.NET.Base.Permissions.DocPermissions.ViewDocs')** `Field`
    Allows you to view docs
- **[FormPermissions](FormPermissions 'Guilded.NET.Base.Permissions.FormPermissions')** `Enum`
  Permissions related to forms & polls.
  - **[All](FormPermissions#Guilded.NET.Base.Permissions.FormPermissions.All 'Guilded.NET.Base.Permissions.FormPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](FormPermissions#Guilded.NET.Base.Permissions.FormPermissions.Basic 'Guilded.NET.Base.Permissions.FormPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[FormResponses](FormPermissions#Guilded.NET.Base.Permissions.FormPermissions.FormResponses 'Guilded.NET.Base.Permissions.FormPermissions.FormResponses')** `Field`
    Allows you to view all form responses
  - **[None](FormPermissions#Guilded.NET.Base.Permissions.FormPermissions.None 'Guilded.NET.Base.Permissions.FormPermissions.None')** `Field`
    No given permissions.
  - **[PollResults](FormPermissions#Guilded.NET.Base.Permissions.FormPermissions.PollResults 'Guilded.NET.Base.Permissions.FormPermissions.PollResults')** `Field`
    Allows you to view all poll results
- **[ForumPermissions](ForumPermissions 'Guilded.NET.Base.Permissions.ForumPermissions')** `Enum`
  Permissions related to forums.
  - **[All](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.All 'Guilded.NET.Base.Permissions.ForumPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.Basic 'Guilded.NET.Base.Permissions.ForumPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateTopicReplies](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.CreateTopicReplies 'Guilded.NET.Base.Permissions.ForumPermissions.CreateTopicReplies')** `Field`
    Allows you to create forum topic replies
  - **[CreateTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.CreateTopics 'Guilded.NET.Base.Permissions.ForumPermissions.CreateTopics')** `Field`
    Allows you to create forum topics
  - **[LockTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.LockTopics 'Guilded.NET.Base.Permissions.ForumPermissions.LockTopics')** `Field`
    Allows you to lock a topic
  - **[Manage](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.Manage 'Guilded.NET.Base.Permissions.ForumPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.ManageTopics 'Guilded.NET.Base.Permissions.ForumPermissions.ManageTopics')** `Field`
    Allows you to remove topics and replies by others, or move them to other channels
  - **[None](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.None 'Guilded.NET.Base.Permissions.ForumPermissions.None')** `Field`
    No given permissions.
  - **[ReadForums](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.ReadForums 'Guilded.NET.Base.Permissions.ForumPermissions.ReadForums')** `Field`
    Allows you to read forums
  - **[StickyTopics](ForumPermissions#Guilded.NET.Base.Permissions.ForumPermissions.StickyTopics 'Guilded.NET.Base.Permissions.ForumPermissions.StickyTopics')** `Field`
    Allows you to sticky a topic
- **[GeneralPermissions](GeneralPermissions 'Guilded.NET.Base.Permissions.GeneralPermissions')** `Enum`
  Permissions related to servers.
  - **[All](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.All 'Guilded.NET.Base.Permissions.GeneralPermissions.All')** `Field`
    All of the permissions combined.
  - **[InviteMembers](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.InviteMembers 'Guilded.NET.Base.Permissions.GeneralPermissions.InviteMembers')** `Field`
    Allows you to directly invite members to the server
  - **[KickBanMembers](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.KickBanMembers 'Guilded.NET.Base.Permissions.GeneralPermissions.KickBanMembers')** `Field`
    Allows you to kick or ban members from the server
  - **[Manage](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.Manage 'Guilded.NET.Base.Permissions.GeneralPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageChannels](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.ManageChannels 'Guilded.NET.Base.Permissions.GeneralPermissions.ManageChannels')** `Field`
    Allows you to create new channels and edit or delete existing ones
  - **[ManageGroups](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.ManageGroups 'Guilded.NET.Base.Permissions.GeneralPermissions.ManageGroups')** `Field`
    Allows you to create new groups and edit or delete existing ones
  - **[ManageRoles](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.ManageRoles 'Guilded.NET.Base.Permissions.GeneralPermissions.ManageRoles')** `Field`
    Allows you to update the server's roles
  - **[ManageWebhooks](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.ManageWebhooks 'Guilded.NET.Base.Permissions.GeneralPermissions.ManageWebhooks')** `Field`
    Allows you to create new webhooks and edit or delete existing ones
  - **[MentionEveryoneHere](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.MentionEveryoneHere 'Guilded.NET.Base.Permissions.GeneralPermissions.MentionEveryoneHere')** `Field`
    Allows you to use @everyone and @here mentions
  - **[None](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.None 'Guilded.NET.Base.Permissions.GeneralPermissions.None')** `Field`
    No given permissions.
  - **[UpdateServer](GeneralPermissions#Guilded.NET.Base.Permissions.GeneralPermissions.UpdateServer 'Guilded.NET.Base.Permissions.GeneralPermissions.UpdateServer')** `Field`
    Allows you to update server's settings
- **[ListPermissions](ListPermissions 'Guilded.NET.Base.Permissions.ListPermissions')** `Enum`
  Permissions related to lists.
  - **[All](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.All 'Guilded.NET.Base.Permissions.ListPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.Basic 'Guilded.NET.Base.Permissions.ListPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CompleteListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.CompleteListItems 'Guilded.NET.Base.Permissions.ListPermissions.CompleteListItems')** `Field`
    Allows you to complete list items created by others
  - **[CreateListItem](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.CreateListItem 'Guilded.NET.Base.Permissions.ListPermissions.CreateListItem')** `Field`
    Allows you to create list items
  - **[Manage](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.Manage 'Guilded.NET.Base.Permissions.ListPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.ManageListItems 'Guilded.NET.Base.Permissions.ListPermissions.ManageListItems')** `Field`
    Allows you to edit list item messages by others and move list items to other channels
  - **[None](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.None 'Guilded.NET.Base.Permissions.ListPermissions.None')** `Field`
    No given permissions.
  - **[RemoveListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.RemoveListItems 'Guilded.NET.Base.Permissions.ListPermissions.RemoveListItems')** `Field`
    Allows you to remove list items created by others
  - **[ReorderListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.ReorderListItems 'Guilded.NET.Base.Permissions.ListPermissions.ReorderListItems')** `Field`
    Allows you to reorder list items
  - **[ViewListItems](ListPermissions#Guilded.NET.Base.Permissions.ListPermissions.ViewListItems 'Guilded.NET.Base.Permissions.ListPermissions.ViewListItems')** `Field`
    Allows you to view list items
- **[MatchmakingPermissions](MatchmakingPermissions 'Guilded.NET.Base.Permissions.MatchmakingPermissions')** `Enum`
  Permissions related to matchmaking.
  - **[All](MatchmakingPermissions#Guilded.NET.Base.Permissions.MatchmakingPermissions.All 'Guilded.NET.Base.Permissions.MatchmakingPermissions.All')** `Field`
    All of the permissions combined.
  - **[CreateScrims](MatchmakingPermissions#Guilded.NET.Base.Permissions.MatchmakingPermissions.CreateScrims 'Guilded.NET.Base.Permissions.MatchmakingPermissions.CreateScrims')** `Field`
    Allows you to create matchmaking scrims
  - **[CreateTournaments](MatchmakingPermissions#Guilded.NET.Base.Permissions.MatchmakingPermissions.CreateTournaments 'Guilded.NET.Base.Permissions.MatchmakingPermissions.CreateTournaments')** `Field`
    Allows you to register the server for tournaments
  - **[None](MatchmakingPermissions#Guilded.NET.Base.Permissions.MatchmakingPermissions.None 'Guilded.NET.Base.Permissions.MatchmakingPermissions.None')** `Field`
    No given permissions.
  - **[RegisterForTournaments](MatchmakingPermissions#Guilded.NET.Base.Permissions.MatchmakingPermissions.RegisterForTournaments 'Guilded.NET.Base.Permissions.MatchmakingPermissions.RegisterForTournaments')** `Field`
    Allows you to use the server to create and manage tournaments
- **[MediaPermissions](MediaPermissions 'Guilded.NET.Base.Permissions.MediaPermissions')** `Enum`
  Permissions related to media.
  - **[All](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.All 'Guilded.NET.Base.Permissions.MediaPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.Basic 'Guilded.NET.Base.Permissions.MediaPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.CreateMedia 'Guilded.NET.Base.Permissions.MediaPermissions.CreateMedia')** `Field`
    Allows you to create media
  - **[Manage](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.Manage 'Guilded.NET.Base.Permissions.MediaPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.ManageMedia 'Guilded.NET.Base.Permissions.MediaPermissions.ManageMedia')** `Field`
    Allows you to edit media created by others and move media items to other channels
  - **[None](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.None 'Guilded.NET.Base.Permissions.MediaPermissions.None')** `Field`
    No given permissions.
  - **[RemoveMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.RemoveMedia 'Guilded.NET.Base.Permissions.MediaPermissions.RemoveMedia')** `Field`
    Allows you to remove media created by others
  - **[SeeMedia](MediaPermissions#Guilded.NET.Base.Permissions.MediaPermissions.SeeMedia 'Guilded.NET.Base.Permissions.MediaPermissions.SeeMedia')** `Field`
    Allows you to see media
- **[RecruitmentPermissions](RecruitmentPermissions 'Guilded.NET.Base.Permissions.RecruitmentPermissions')** `Enum`
  Permissions related to recruiting.
  - **[All](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.All 'Guilded.NET.Base.Permissions.RecruitmentPermissions.All')** `Field`
    All of the permissions combined.
  - **[ApproveApplications](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.ApproveApplications 'Guilded.NET.Base.Permissions.RecruitmentPermissions.ApproveApplications')** `Field`
    Allows you to approve server and game applications
  - **[EditApplications](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.EditApplications 'Guilded.NET.Base.Permissions.RecruitmentPermissions.EditApplications')** `Field`
    Allows you to edit server and game applications, and toggle accepting applications
  - **[IndicateInterest](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.IndicateInterest 'Guilded.NET.Base.Permissions.RecruitmentPermissions.IndicateInterest')** `Field`
    Allows you to indicate interest in a player instead of upvote
  - **[Manage](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.Manage 'Guilded.NET.Base.Permissions.RecruitmentPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ModifyStatus](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.ModifyStatus 'Guilded.NET.Base.Permissions.RecruitmentPermissions.ModifyStatus')** `Field`
    Allows you to modify the Find Player status for server listing card
  - **[None](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.None 'Guilded.NET.Base.Permissions.RecruitmentPermissions.None')** `Field`
    No given permissions.
  - **[ViewApplications](RecruitmentPermissions#Guilded.NET.Base.Permissions.RecruitmentPermissions.ViewApplications 'Guilded.NET.Base.Permissions.RecruitmentPermissions.ViewApplications')** `Field`
    Allows you to view server and game applications
- **[SchedulingPermissions](SchedulingPermissions 'Guilded.NET.Base.Permissions.SchedulingPermissions')** `Enum`
  Permissions related to scheduling.
  - **[All](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.All 'Guilded.NET.Base.Permissions.SchedulingPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.Basic 'Guilded.NET.Base.Permissions.SchedulingPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions/
  - **[CreateSchedule](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.CreateSchedule 'Guilded.NET.Base.Permissions.SchedulingPermissions.CreateSchedule')** `Field`
    Allows you to let server know your available schedule
  - **[DeleteSchedule](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.DeleteSchedule 'Guilded.NET.Base.Permissions.SchedulingPermissions.DeleteSchedule')** `Field`
    Allows you to remove availabilities created by others
  - **[Manage](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.Manage 'Guilded.NET.Base.Permissions.SchedulingPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[None](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.None 'Guilded.NET.Base.Permissions.SchedulingPermissions.None')** `Field`
    No given permissions.
  - **[ViewSchedules](SchedulingPermissions#Guilded.NET.Base.Permissions.SchedulingPermissions.ViewSchedules 'Guilded.NET.Base.Permissions.SchedulingPermissions.ViewSchedules')** `Field`
    Allows you to view server member's schedule
- **[StreamPermissions](StreamPermissions 'Guilded.NET.Base.Permissions.StreamPermissions')** `Enum`
  Permissions related to streaming.
  - **[AddStream](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.AddStream 'Guilded.NET.Base.Permissions.StreamPermissions.AddStream')** `Field`
    Allows you to add a stream and also talk in the stream channel
  - **[All](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.All 'Guilded.NET.Base.Permissions.StreamPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.Basic 'Guilded.NET.Base.Permissions.StreamPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[JoinVoice](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.JoinVoice 'Guilded.NET.Base.Permissions.StreamPermissions.JoinVoice')** `Field`
    Allows you to talk in stream channel
  - **[Manage](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.Manage 'Guilded.NET.Base.Permissions.StreamPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[SendMessages](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.SendMessages 'Guilded.NET.Base.Permissions.StreamPermissions.SendMessages')** `Field`
    Allows you to send message in stream channel
  - **[ViewStreams](StreamPermissions#Guilded.NET.Base.Permissions.StreamPermissions.ViewStreams 'Guilded.NET.Base.Permissions.StreamPermissions.ViewStreams')** `Field`
    Allows you to view streams
- **[VoicePermissions](VoicePermissions 'Guilded.NET.Base.Permissions.VoicePermissions')** `Enum`
  Permissions related to voice.
  - **[AddVoice](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.AddVoice 'Guilded.NET.Base.Permissions.VoicePermissions.AddVoice')** `Field`
    Allows you to talk in voice chat
  - **[All](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.All 'Guilded.NET.Base.Permissions.VoicePermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.Basic 'Guilded.NET.Base.Permissions.VoicePermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[Broadcast](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.Broadcast 'Guilded.NET.Base.Permissions.VoicePermissions.Broadcast')** `Field`
    Allows you to broadcast your voice to rooms lower in hierarchy when speaking in voice chat
  - **[DeafenMembers](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.DeafenMembers 'Guilded.NET.Base.Permissions.VoicePermissions.DeafenMembers')** `Field`
    Allows you to deafen members in voice chat
  - **[HearVoice](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.HearVoice 'Guilded.NET.Base.Permissions.VoicePermissions.HearVoice')** `Field`
    Allows you to listen to voice chat
  - **[Manage](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.Manage 'Guilded.NET.Base.Permissions.VoicePermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageVoiceRooms](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.ManageVoiceRooms 'Guilded.NET.Base.Permissions.VoicePermissions.ManageVoiceRooms')** `Field`
    Allows you to create, rename, and delete voice rooms
  - **[MoveMembers](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.MoveMembers 'Guilded.NET.Base.Permissions.VoicePermissions.MoveMembers')** `Field`
    Allows you to move members to other voice rooms
  - **[MuteMembers](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.MuteMembers 'Guilded.NET.Base.Permissions.VoicePermissions.MuteMembers')** `Field`
    Allows you to mute members in voice chats
  - **[None](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.None 'Guilded.NET.Base.Permissions.VoicePermissions.None')** `Field`
    No given permissions.
  - **[PrioritySpeaker](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.PrioritySpeaker 'Guilded.NET.Base.Permissions.VoicePermissions.PrioritySpeaker')** `Field`
    Allows you to prioritize your voice when speaking in voice chat
  - **[SendMessages](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.SendMessages 'Guilded.NET.Base.Permissions.VoicePermissions.SendMessages')** `Field`
    Allows you to send chat messages in the voice channel
  - **[VoiceActivity](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.VoiceActivity 'Guilded.NET.Base.Permissions.VoicePermissions.VoiceActivity')** `Field`
    Allows you to use voice activity input mode from voice chaats
  - **[Whisper](VoicePermissions#Guilded.NET.Base.Permissions.VoicePermissions.Whisper 'Guilded.NET.Base.Permissions.VoicePermissions.Whisper')** `Field`
    Allows you to direct your voice to specific users
- **[XpPermissions](XpPermissions 'Guilded.NET.Base.Permissions.XpPermissions')** `Enum`
  Permissions related to XP.
  - **[All](XpPermissions#Guilded.NET.Base.Permissions.XpPermissions.All 'Guilded.NET.Base.Permissions.XpPermissions.All')** `Field`
    All of the permissions combined.
  - **[Manage](XpPermissions#Guilded.NET.Base.Permissions.XpPermissions.Manage 'Guilded.NET.Base.Permissions.XpPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageServerXp](XpPermissions#Guilded.NET.Base.Permissions.XpPermissions.ManageServerXp 'Guilded.NET.Base.Permissions.XpPermissions.ManageServerXp')** `Field`
    Allows you to manage XP on server members
  - **[None](XpPermissions#Guilded.NET.Base.Permissions.XpPermissions.None 'Guilded.NET.Base.Permissions.XpPermissions.None')** `Field`
    No given permissions.