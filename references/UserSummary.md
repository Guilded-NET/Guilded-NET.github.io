---
title: UserSummary
layout: references
section: references
tags:
  - references
  - class
description: "

Global minimal information about a user."
---

## UserSummary Class
##### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users 'Guilded.Base.Users')

Global minimal information about a user.

```csharp
public class UserSummary : Guilded.Base.ContentModel,
Guilded.Base.IModelHasId<Guilded.Base.HashId>
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseModel](BaseModel 'Guilded.Base.BaseModel') &#129106; [ContentModel](ContentModel 'Guilded.Base.ContentModel') &#129106; UserSummary

Implements [Guilded.Base.IModelHasId&lt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')[HashId](HashId 'Guilded.Base.HashId')[&gt;](IModelHasId_T_ 'Guilded.Base.IModelHasId<T>')

Derived  
&#8627; [User](User 'Guilded.Base.Users.User')

### Remarks
  
Defines a normal user with minimal information.

| Constructors | |
| :--- | :--- |
| [UserSummary(HashId, string, Uri, UserType)](UserSummary.UserSummary(HashId,string,Uri,UserType) 'Guilded.Base.Users.UserSummary.UserSummary(Guilded.Base.HashId, string, Uri, Guilded.Base.Users.UserType)') | Initializes a new instance of [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') with specified properties. |

| Properties | |
| :--- | :--- |
| [Avatar](UserSummary.Avatar 'Guilded.Base.Users.UserSummary.Avatar') | Gets the global avatar of [the user](User 'Guilded.Base.Users.User'). |
| [Id](UserSummary.Id 'Guilded.Base.Users.UserSummary.Id') | Gets the identifier of [user](User 'Guilded.Base.Users.User'). |
| [IsBot](UserSummary.IsBot 'Guilded.Base.Users.UserSummary.IsBot') | Gets whether [the user](User 'Guilded.Base.Users.User') is a [bot](UserType#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot'). |
| [Name](UserSummary.Name 'Guilded.Base.Users.UserSummary.Name') | Gets the global username of [the user](User 'Guilded.Base.Users.User'). |
| [Type](UserSummary.Type 'Guilded.Base.Users.UserSummary.Type') | Gets the type of [the user](User 'Guilded.Base.Users.User') they are. |

| Methods | |
| :--- | :--- |
| [AddMemberBanAsync(HashId, string)](UserSummary.AddMemberBanAsync(HashId,string) 'Guilded.Base.Users.UserSummary.AddMemberBanAsync(Guilded.Base.HashId, string)') | Bans the member. |
| [AddRoleAsync(HashId, uint)](UserSummary.AddRoleAsync(HashId,uint) 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint)') | Adds a [role](UserSummary.AddRoleAsync(HashId,uint)#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role') to [the user](User 'Guilded.Base.Users.User'). |
| [AddXpAsync(HashId, short)](UserSummary.AddXpAsync(HashId,short) 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short)') | Gives [amount](UserSummary.AddXpAsync(HashId,short)#Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId,short).amount 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short).amount') to the specified member. |
| [BanAsync(HashId, string)](UserSummary.BanAsync(HashId,string) 'Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId, string)') | Bans the member. |
| [DeleteNicknameAsync(HashId)](UserSummary.DeleteNicknameAsync(HashId) 'Guilded.Base.Users.UserSummary.DeleteNicknameAsync(Guilded.Base.HashId)') | Deletes the message. |
| [GetBanAsync(HashId)](UserSummary.GetBanAsync(HashId) 'Guilded.Base.Users.UserSummary.GetBanAsync(Guilded.Base.HashId)') | Gets [the information](MemberBan 'Guilded.Base.Servers.MemberBan') about the ban of member. |
| [GetSocialLinkAsync(HashId, SocialLinkType)](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType) 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)') | Gets the specified member social link based on given [linkType](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType)#Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).linkType'). |
| [KickAsync(HashId)](UserSummary.KickAsync(HashId) 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId)') | Bans the member. |
| [RemoveMemberAsync(HashId)](UserSummary.RemoveMemberAsync(HashId) 'Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId)') | Removes the member from the [server](UserSummary.RemoveMemberAsync(HashId)#Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server 'Guilded.Base.Users.UserSummary.RemoveMemberAsync(Guilded.Base.HashId).server'). |
| [RemoveMemberBanAsync(HashId)](UserSummary.RemoveMemberBanAsync(HashId) 'Guilded.Base.Users.UserSummary.RemoveMemberBanAsync(Guilded.Base.HashId)') | Unbans the member. |
| [RemoveRoleAsync(HashId, uint)](UserSummary.RemoveRoleAsync(HashId,uint) 'Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId, uint)') | Removes [role](UserSummary.RemoveRoleAsync(HashId,uint)#Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId, uint).role') from [the user](User 'Guilded.Base.Users.User'). |
| [ToString()](UserSummary.ToString() 'Guilded.Base.Users.UserSummary.ToString()') | Returns the string representation of this [UserSummary](UserSummary 'Guilded.Base.Users.UserSummary') instance. |
| [UnbanAsync(HashId)](UserSummary.UnbanAsync(HashId) 'Guilded.Base.Users.UserSummary.UnbanAsync(Guilded.Base.HashId)') | Bans the member. |
| [UpdateNicknameAsync(HashId, string)](UserSummary.UpdateNicknameAsync(HashId,string) 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string)') | Changes [the nickname](Member.Nickname 'Guilded.Base.Servers.Member.Nickname') of the member. |

### See Also
- [User](User 'Guilded.Base.Users.User')
- [SocialLink](SocialLink 'Guilded.Base.Users.SocialLink')