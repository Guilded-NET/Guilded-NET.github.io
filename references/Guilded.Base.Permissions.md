---
title: Guilded.Base.Permissions
layout: references
section: references
tags:
  - references
  - namespace
description: ""
---

## Guilded.Base.Permissions Namespace
- **[AnnouncementPermissions](AnnouncementPermissions.md 'Guilded.Base.Permissions.AnnouncementPermissions')** `Enum`
  Permissions related to announcements.
  - **[All](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.All 'Guilded.Base.Permissions.AnnouncementPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.Basic 'Guilded.Base.Permissions.AnnouncementPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateAnnouncements](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.CreateAnnouncements 'Guilded.Base.Permissions.AnnouncementPermissions.CreateAnnouncements')** `Field`
    Allows you to create and remove announcements
  - **[Manage](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.Manage 'Guilded.Base.Permissions.AnnouncementPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageAnnouncements](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.ManageAnnouncements 'Guilded.Base.Permissions.AnnouncementPermissions.ManageAnnouncements')** `Field`
    Allows you to delete announcements by other members or pin any announcement
  - **[None](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.None 'Guilded.Base.Permissions.AnnouncementPermissions.None')** `Field`
    No given permissions.
  - **[ViewAnnouncements](AnnouncementPermissions.md#Guilded.Base.Permissions.AnnouncementPermissions.ViewAnnouncements 'Guilded.Base.Permissions.AnnouncementPermissions.ViewAnnouncements')** `Field`
    Allows you to view announcements
- **[BotPermissions](BotPermissions.md 'Guilded.Base.Permissions.BotPermissions')** `Enum`
  Permissions related to bots.
  - **[All](BotPermissions.md#Guilded.Base.Permissions.BotPermissions.All 'Guilded.Base.Permissions.BotPermissions.All')** `Field`
    All of the permissions combined.
  - **[ManageBots](BotPermissions.md#Guilded.Base.Permissions.BotPermissions.ManageBots 'Guilded.Base.Permissions.BotPermissions.ManageBots')** `Field`
    Allows you to create and edit bots for automated workflows.  
    NOTE: For now, bots do not enforce permissions. Anyone with this permission  
    can create bots to work around their role's existing permissions.
  - **[None](BotPermissions.md#Guilded.Base.Permissions.BotPermissions.None 'Guilded.Base.Permissions.BotPermissions.None')** `Field`
    No given permissions.
- **[BracketPermissions](BracketPermissions.md 'Guilded.Base.Permissions.BracketPermissions')** `Enum`
  Permissions related to brackets.
  - **[All](BracketPermissions.md#Guilded.Base.Permissions.BracketPermissions.All 'Guilded.Base.Permissions.BracketPermissions.All')** `Field`
    All of the permissions combined.
  - **[None](BracketPermissions.md#Guilded.Base.Permissions.BracketPermissions.None 'Guilded.Base.Permissions.BracketPermissions.None')** `Field`
    No given permissions.
  - **[ReportScores](BracketPermissions.md#Guilded.Base.Permissions.BracketPermissions.ReportScores 'Guilded.Base.Permissions.BracketPermissions.ReportScores')** `Field`
    Allows you to report match scores on behalf of your server
  - **[ViewBrackets](BracketPermissions.md#Guilded.Base.Permissions.BracketPermissions.ViewBrackets 'Guilded.Base.Permissions.BracketPermissions.ViewBrackets')** `Field`
    Allows you to view tournament brackets
- **[CalendarPermissions](CalendarPermissions.md 'Guilded.Base.Permissions.CalendarPermissions')** `Enum`
  Permissions related to calendar.
  - **[All](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.All 'Guilded.Base.Permissions.CalendarPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.Basic 'Guilded.Base.Permissions.CalendarPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateEvents](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.CreateEvents 'Guilded.Base.Permissions.CalendarPermissions.CreateEvents')** `Field`
    Allows you to create events
  - **[EditRSVPs](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.EditRSVPs 'Guilded.Base.Permissions.CalendarPermissions.EditRSVPs')** `Field`
    Allows you to edit RSVP status for members in an event
  - **[Manage](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.Manage 'Guilded.Base.Permissions.CalendarPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageEvents](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.ManageEvents 'Guilded.Base.Permissions.CalendarPermissions.ManageEvents')** `Field`
    Allows you to update events created by others and move them to other channel
  - **[None](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.None 'Guilded.Base.Permissions.CalendarPermissions.None')** `Field`
    No given permissions.
  - **[RemoveEvents](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.RemoveEvents 'Guilded.Base.Permissions.CalendarPermissions.RemoveEvents')** `Field`
    Allows you to remove events created by others
  - **[ViewEvents](CalendarPermissions.md#Guilded.Base.Permissions.CalendarPermissions.ViewEvents 'Guilded.Base.Permissions.CalendarPermissions.ViewEvents')** `Field`
    Allows you to view events
- **[ChatPermissions](ChatPermissions.md 'Guilded.Base.Permissions.ChatPermissions')** `Enum`
  Permissions related to chat.
  - **[All](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.All 'Guilded.Base.Permissions.ChatPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.Basic 'Guilded.Base.Permissions.ChatPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateThreads](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.CreateThreads 'Guilded.Base.Permissions.ChatPermissions.CreateThreads')** `Field`
    Allows you to create threads in the channel
  - **[Manage](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.Manage 'Guilded.Base.Permissions.ChatPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageMessages](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.ManageMessages 'Guilded.Base.Permissions.ChatPermissions.ManageMessages')** `Field`
    Allows you to delete chat messages by other members or pin any message
  - **[ManageThreads](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.ManageThreads 'Guilded.Base.Permissions.ChatPermissions.ManageThreads')** `Field`
    Allows you to archive and restore threads
  - **[None](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.None 'Guilded.Base.Permissions.ChatPermissions.None')** `Field`
    No given permissions.
  - **[ReadMessages](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.ReadMessages 'Guilded.Base.Permissions.ChatPermissions.ReadMessages')** `Field`
    Allows you to read chat messages
  - **[SendMessages](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.SendMessages 'Guilded.Base.Permissions.ChatPermissions.SendMessages')** `Field`
    Allows you to send chat messages
  - **[SendThreadMessages](ChatPermissions.md#Guilded.Base.Permissions.ChatPermissions.SendThreadMessages 'Guilded.Base.Permissions.ChatPermissions.SendThreadMessages')** `Field`
    Allows you to reply to threads in the channel
- **[CustomPermissions](CustomPermissions.md 'Guilded.Base.Permissions.CustomPermissions')** `Enum`
  Permissions related to customization.
  - **[All](CustomPermissions.md#Guilded.Base.Permissions.CustomPermissions.All 'Guilded.Base.Permissions.CustomPermissions.All')** `Field`
    All of the permissions combined.
  - **[ChangeNickname](CustomPermissions.md#Guilded.Base.Permissions.CustomPermissions.ChangeNickname 'Guilded.Base.Permissions.CustomPermissions.ChangeNickname')** `Field`
    Members with this permission can change their own nickname.
  - **[ManageEmoji](CustomPermissions.md#Guilded.Base.Permissions.CustomPermissions.ManageEmoji 'Guilded.Base.Permissions.CustomPermissions.ManageEmoji')** `Field`
    Allows the creation and management of server emoji
  - **[ManageNicknames](CustomPermissions.md#Guilded.Base.Permissions.CustomPermissions.ManageNicknames 'Guilded.Base.Permissions.CustomPermissions.ManageNicknames')** `Field`
    Members with this permission can change the nickname of others.
  - **[None](CustomPermissions.md#Guilded.Base.Permissions.CustomPermissions.None 'Guilded.Base.Permissions.CustomPermissions.None')** `Field`
    No given permissions.
- **[DocPermissions](DocPermissions.md 'Guilded.Base.Permissions.DocPermissions')** `Enum`
  Permissions related to documents.
  - **[All](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.All 'Guilded.Base.Permissions.DocPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.Basic 'Guilded.Base.Permissions.DocPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.CreateDocs 'Guilded.Base.Permissions.DocPermissions.CreateDocs')** `Field`
    Allows you to create docs
  - **[Manage](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.Manage 'Guilded.Base.Permissions.DocPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.ManageDocs 'Guilded.Base.Permissions.DocPermissions.ManageDocs')** `Field`
    Allows you to update docs created by others and move them to other channels
  - **[None](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.None 'Guilded.Base.Permissions.DocPermissions.None')** `Field`
    No given permissions.
  - **[RemoveDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.RemoveDocs 'Guilded.Base.Permissions.DocPermissions.RemoveDocs')** `Field`
    Allows you to remove docs created by others
  - **[ViewDocs](DocPermissions.md#Guilded.Base.Permissions.DocPermissions.ViewDocs 'Guilded.Base.Permissions.DocPermissions.ViewDocs')** `Field`
    Allows you to view docs
- **[FormPermissions](FormPermissions.md 'Guilded.Base.Permissions.FormPermissions')** `Enum`
  Permissions related to forms & polls.
  - **[All](FormPermissions.md#Guilded.Base.Permissions.FormPermissions.All 'Guilded.Base.Permissions.FormPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](FormPermissions.md#Guilded.Base.Permissions.FormPermissions.Basic 'Guilded.Base.Permissions.FormPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[FormResponses](FormPermissions.md#Guilded.Base.Permissions.FormPermissions.FormResponses 'Guilded.Base.Permissions.FormPermissions.FormResponses')** `Field`
    Allows you to view all form responses
  - **[None](FormPermissions.md#Guilded.Base.Permissions.FormPermissions.None 'Guilded.Base.Permissions.FormPermissions.None')** `Field`
    No given permissions.
  - **[PollResults](FormPermissions.md#Guilded.Base.Permissions.FormPermissions.PollResults 'Guilded.Base.Permissions.FormPermissions.PollResults')** `Field`
    Allows you to view all poll results
- **[ForumPermissions](ForumPermissions.md 'Guilded.Base.Permissions.ForumPermissions')** `Enum`
  Permissions related to forums.
  - **[All](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.All 'Guilded.Base.Permissions.ForumPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.Basic 'Guilded.Base.Permissions.ForumPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateTopicReplies](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies 'Guilded.Base.Permissions.ForumPermissions.CreateTopicReplies')** `Field`
    Allows you to create forum topic replies
  - **[CreateTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.CreateTopics 'Guilded.Base.Permissions.ForumPermissions.CreateTopics')** `Field`
    Allows you to create forum topics
  - **[LockTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.LockTopics 'Guilded.Base.Permissions.ForumPermissions.LockTopics')** `Field`
    Allows you to lock a topic
  - **[Manage](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.Manage 'Guilded.Base.Permissions.ForumPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.ManageTopics 'Guilded.Base.Permissions.ForumPermissions.ManageTopics')** `Field`
    Allows you to remove topics and replies by others, or move them to other channels
  - **[None](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.None 'Guilded.Base.Permissions.ForumPermissions.None')** `Field`
    No given permissions.
  - **[ReadForums](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.ReadForums 'Guilded.Base.Permissions.ForumPermissions.ReadForums')** `Field`
    Allows you to read forums
  - **[StickyTopics](ForumPermissions.md#Guilded.Base.Permissions.ForumPermissions.StickyTopics 'Guilded.Base.Permissions.ForumPermissions.StickyTopics')** `Field`
    Allows you to sticky a topic
- **[GeneralPermissions](GeneralPermissions.md 'Guilded.Base.Permissions.GeneralPermissions')** `Enum`
  Permissions related to servers.
  - **[All](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.All 'Guilded.Base.Permissions.GeneralPermissions.All')** `Field`
    All of the permissions combined.
  - **[InviteMembers](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.InviteMembers 'Guilded.Base.Permissions.GeneralPermissions.InviteMembers')** `Field`
    Allows you to directly invite members to the server
  - **[KickBanMembers](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.KickBanMembers 'Guilded.Base.Permissions.GeneralPermissions.KickBanMembers')** `Field`
    Allows you to kick or ban members from the server
  - **[Manage](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.Manage 'Guilded.Base.Permissions.GeneralPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageChannels](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageChannels 'Guilded.Base.Permissions.GeneralPermissions.ManageChannels')** `Field`
    Allows you to create new channels and edit or delete existing ones
  - **[ManageGroups](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageGroups 'Guilded.Base.Permissions.GeneralPermissions.ManageGroups')** `Field`
    Allows you to create new groups and edit or delete existing ones
  - **[ManageRoles](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageRoles 'Guilded.Base.Permissions.GeneralPermissions.ManageRoles')** `Field`
    Allows you to update the server's roles
  - **[ManageWebhooks](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks 'Guilded.Base.Permissions.GeneralPermissions.ManageWebhooks')** `Field`
    Allows you to create new webhooks and edit or delete existing ones
  - **[MentionEveryoneHere](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.MentionEveryoneHere 'Guilded.Base.Permissions.GeneralPermissions.MentionEveryoneHere')** `Field`
    Allows you to use @everyone and @here mentions
  - **[None](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.None 'Guilded.Base.Permissions.GeneralPermissions.None')** `Field`
    No given permissions.
  - **[UpdateServer](GeneralPermissions.md#Guilded.Base.Permissions.GeneralPermissions.UpdateServer 'Guilded.Base.Permissions.GeneralPermissions.UpdateServer')** `Field`
    Allows you to update server's settings
- **[ListPermissions](ListPermissions.md 'Guilded.Base.Permissions.ListPermissions')** `Enum`
  Permissions related to lists.
  - **[All](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.All 'Guilded.Base.Permissions.ListPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.Basic 'Guilded.Base.Permissions.ListPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CompleteListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.CompleteListItems 'Guilded.Base.Permissions.ListPermissions.CompleteListItems')** `Field`
    Allows you to complete list items created by others
  - **[CreateListItem](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.CreateListItem 'Guilded.Base.Permissions.ListPermissions.CreateListItem')** `Field`
    Allows you to create list items
  - **[Manage](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.Manage 'Guilded.Base.Permissions.ListPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.ManageListItems 'Guilded.Base.Permissions.ListPermissions.ManageListItems')** `Field`
    Allows you to edit list item messages by others and move list items to other channels
  - **[None](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.None 'Guilded.Base.Permissions.ListPermissions.None')** `Field`
    No given permissions.
  - **[RemoveListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.RemoveListItems 'Guilded.Base.Permissions.ListPermissions.RemoveListItems')** `Field`
    Allows you to remove list items created by others
  - **[ReorderListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.ReorderListItems 'Guilded.Base.Permissions.ListPermissions.ReorderListItems')** `Field`
    Allows you to reorder list items
  - **[ViewListItems](ListPermissions.md#Guilded.Base.Permissions.ListPermissions.ViewListItems 'Guilded.Base.Permissions.ListPermissions.ViewListItems')** `Field`
    Allows you to view list items
- **[MatchmakingPermissions](MatchmakingPermissions.md 'Guilded.Base.Permissions.MatchmakingPermissions')** `Enum`
  Permissions related to matchmaking.
  - **[All](MatchmakingPermissions.md#Guilded.Base.Permissions.MatchmakingPermissions.All 'Guilded.Base.Permissions.MatchmakingPermissions.All')** `Field`
    All of the permissions combined.
  - **[CreateScrims](MatchmakingPermissions.md#Guilded.Base.Permissions.MatchmakingPermissions.CreateScrims 'Guilded.Base.Permissions.MatchmakingPermissions.CreateScrims')** `Field`
    Allows you to create matchmaking scrims
  - **[CreateTournaments](MatchmakingPermissions.md#Guilded.Base.Permissions.MatchmakingPermissions.CreateTournaments 'Guilded.Base.Permissions.MatchmakingPermissions.CreateTournaments')** `Field`
    Allows you to register the server for tournaments
  - **[None](MatchmakingPermissions.md#Guilded.Base.Permissions.MatchmakingPermissions.None 'Guilded.Base.Permissions.MatchmakingPermissions.None')** `Field`
    No given permissions.
  - **[RegisterForTournaments](MatchmakingPermissions.md#Guilded.Base.Permissions.MatchmakingPermissions.RegisterForTournaments 'Guilded.Base.Permissions.MatchmakingPermissions.RegisterForTournaments')** `Field`
    Allows you to use the server to create and manage tournaments
- **[MediaPermissions](MediaPermissions.md 'Guilded.Base.Permissions.MediaPermissions')** `Enum`
  Permissions related to media.
  - **[All](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.All 'Guilded.Base.Permissions.MediaPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.Basic 'Guilded.Base.Permissions.MediaPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[CreateMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.CreateMedia 'Guilded.Base.Permissions.MediaPermissions.CreateMedia')** `Field`
    Allows you to create media
  - **[Manage](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.Manage 'Guilded.Base.Permissions.MediaPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.ManageMedia 'Guilded.Base.Permissions.MediaPermissions.ManageMedia')** `Field`
    Allows you to edit media created by others and move media items to other channels
  - **[None](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.None 'Guilded.Base.Permissions.MediaPermissions.None')** `Field`
    No given permissions.
  - **[RemoveMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.RemoveMedia 'Guilded.Base.Permissions.MediaPermissions.RemoveMedia')** `Field`
    Allows you to remove media created by others
  - **[SeeMedia](MediaPermissions.md#Guilded.Base.Permissions.MediaPermissions.SeeMedia 'Guilded.Base.Permissions.MediaPermissions.SeeMedia')** `Field`
    Allows you to see media
- **[RecruitmentPermissions](RecruitmentPermissions.md 'Guilded.Base.Permissions.RecruitmentPermissions')** `Enum`
  Permissions related to recruiting.
  - **[All](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.All 'Guilded.Base.Permissions.RecruitmentPermissions.All')** `Field`
    All of the permissions combined.
  - **[ApproveApplications](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.ApproveApplications 'Guilded.Base.Permissions.RecruitmentPermissions.ApproveApplications')** `Field`
    Allows you to approve server and game applications
  - **[EditApplications](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.EditApplications 'Guilded.Base.Permissions.RecruitmentPermissions.EditApplications')** `Field`
    Allows you to edit server and game applications, and toggle accepting applications
  - **[IndicateInterest](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.IndicateInterest 'Guilded.Base.Permissions.RecruitmentPermissions.IndicateInterest')** `Field`
    Allows you to indicate interest in a player instead of upvote
  - **[Manage](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.Manage 'Guilded.Base.Permissions.RecruitmentPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ModifyStatus](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.ModifyStatus 'Guilded.Base.Permissions.RecruitmentPermissions.ModifyStatus')** `Field`
    Allows you to modify the Find Player status for server listing card
  - **[None](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.None 'Guilded.Base.Permissions.RecruitmentPermissions.None')** `Field`
    No given permissions.
  - **[ViewApplications](RecruitmentPermissions.md#Guilded.Base.Permissions.RecruitmentPermissions.ViewApplications 'Guilded.Base.Permissions.RecruitmentPermissions.ViewApplications')** `Field`
    Allows you to view server and game applications
- **[SchedulingPermissions](SchedulingPermissions.md 'Guilded.Base.Permissions.SchedulingPermissions')** `Enum`
  Permissions related to scheduling.
  - **[All](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.All 'Guilded.Base.Permissions.SchedulingPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.Basic 'Guilded.Base.Permissions.SchedulingPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions/
  - **[CreateSchedule](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule 'Guilded.Base.Permissions.SchedulingPermissions.CreateSchedule')** `Field`
    Allows you to let server know your available schedule
  - **[DeleteSchedule](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule 'Guilded.Base.Permissions.SchedulingPermissions.DeleteSchedule')** `Field`
    Allows you to remove availabilities created by others
  - **[Manage](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.Manage 'Guilded.Base.Permissions.SchedulingPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[None](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.None 'Guilded.Base.Permissions.SchedulingPermissions.None')** `Field`
    No given permissions.
  - **[ViewSchedules](SchedulingPermissions.md#Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules 'Guilded.Base.Permissions.SchedulingPermissions.ViewSchedules')** `Field`
    Allows you to view server member's schedule
- **[StreamPermissions](StreamPermissions.md 'Guilded.Base.Permissions.StreamPermissions')** `Enum`
  Permissions related to streaming.
  - **[AddStream](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.AddStream 'Guilded.Base.Permissions.StreamPermissions.AddStream')** `Field`
    Allows you to add a stream and also talk in the stream channel
  - **[All](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.All 'Guilded.Base.Permissions.StreamPermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.Basic 'Guilded.Base.Permissions.StreamPermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[JoinVoice](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.JoinVoice 'Guilded.Base.Permissions.StreamPermissions.JoinVoice')** `Field`
    Allows you to talk in stream channel
  - **[Manage](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.Manage 'Guilded.Base.Permissions.StreamPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[SendMessages](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.SendMessages 'Guilded.Base.Permissions.StreamPermissions.SendMessages')** `Field`
    Allows you to send message in stream channel
  - **[ViewStreams](StreamPermissions.md#Guilded.Base.Permissions.StreamPermissions.ViewStreams 'Guilded.Base.Permissions.StreamPermissions.ViewStreams')** `Field`
    Allows you to view streams
- **[VoicePermissions](VoicePermissions.md 'Guilded.Base.Permissions.VoicePermissions')** `Enum`
  Permissions related to voice.
  - **[AddVoice](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.AddVoice 'Guilded.Base.Permissions.VoicePermissions.AddVoice')** `Field`
    Allows you to talk in voice chat
  - **[All](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.All 'Guilded.Base.Permissions.VoicePermissions.All')** `Field`
    All of the permissions combined.
  - **[Basic](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.Basic 'Guilded.Base.Permissions.VoicePermissions.Basic')** `Field`
    A simple permission combination allowing writing permissions and reading permissions.
  - **[Broadcast](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.Broadcast 'Guilded.Base.Permissions.VoicePermissions.Broadcast')** `Field`
    Allows you to broadcast your voice to rooms lower in hierarchy when speaking in voice chat
  - **[DeafenMembers](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.DeafenMembers 'Guilded.Base.Permissions.VoicePermissions.DeafenMembers')** `Field`
    Allows you to deafen members in voice chat
  - **[HearVoice](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.HearVoice 'Guilded.Base.Permissions.VoicePermissions.HearVoice')** `Field`
    Allows you to listen to voice chat
  - **[Manage](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.Manage 'Guilded.Base.Permissions.VoicePermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageVoiceRooms](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.ManageVoiceRooms 'Guilded.Base.Permissions.VoicePermissions.ManageVoiceRooms')** `Field`
    Allows you to create, rename, and delete voice rooms
  - **[MoveMembers](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.MoveMembers 'Guilded.Base.Permissions.VoicePermissions.MoveMembers')** `Field`
    Allows you to move members to other voice rooms
  - **[MuteMembers](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.MuteMembers 'Guilded.Base.Permissions.VoicePermissions.MuteMembers')** `Field`
    Allows you to mute members in voice chats
  - **[None](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.None 'Guilded.Base.Permissions.VoicePermissions.None')** `Field`
    No given permissions.
  - **[PrioritySpeaker](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.PrioritySpeaker 'Guilded.Base.Permissions.VoicePermissions.PrioritySpeaker')** `Field`
    Allows you to prioritize your voice when speaking in voice chat
  - **[SendMessages](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.SendMessages 'Guilded.Base.Permissions.VoicePermissions.SendMessages')** `Field`
    Allows you to send chat messages in the voice channel
  - **[VoiceActivity](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.VoiceActivity 'Guilded.Base.Permissions.VoicePermissions.VoiceActivity')** `Field`
    Allows you to use voice activity input mode from voice chaats
  - **[Whisper](VoicePermissions.md#Guilded.Base.Permissions.VoicePermissions.Whisper 'Guilded.Base.Permissions.VoicePermissions.Whisper')** `Field`
    Allows you to direct your voice to specific users
- **[XpPermissions](XpPermissions.md 'Guilded.Base.Permissions.XpPermissions')** `Enum`
  Permissions related to XP.
  - **[All](XpPermissions.md#Guilded.Base.Permissions.XpPermissions.All 'Guilded.Base.Permissions.XpPermissions.All')** `Field`
    All of the permissions combined.
  - **[Manage](XpPermissions.md#Guilded.Base.Permissions.XpPermissions.Manage 'Guilded.Base.Permissions.XpPermissions.Manage')** `Field`
    All of the manage permissions combined.
  - **[ManageServerXp](XpPermissions.md#Guilded.Base.Permissions.XpPermissions.ManageServerXp 'Guilded.Base.Permissions.XpPermissions.ManageServerXp')** `Field`
    Allows you to manage XP on server members
  - **[None](XpPermissions.md#Guilded.Base.Permissions.XpPermissions.None 'Guilded.Base.Permissions.XpPermissions.None')** `Field`
    No given permissions.