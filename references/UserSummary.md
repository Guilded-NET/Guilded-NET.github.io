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
###### **Assembly:** `Guilded.Base`<br/>**Namespace:** [`Guilded.Base.Users`](Guilded.Base.Users.md 'Guilded.Base.Users')

Global minimal information about a user.

```csharp
public class UserSummary : Guilded.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject.md 'Guilded.Base.BaseObject') &#129106; [ClientObject](ClientObject.md 'Guilded.Base.ClientObject') &#129106; UserSummary

Derived  
&#8627; [User](User.md 'Guilded.Base.Users.User')

### Remarks
  
Defines a normal user with minimal information.

| Constructors | |
| :--- | :--- |
| [UserSummary(HashId, Nullable&lt;UserType&gt;, string)](UserSummary.UserSummary(HashId,Nullable_UserType_,string).md 'Guilded.Base.Users.UserSummary.UserSummary(Guilded.Base.HashId, System.Nullable<Guilded.Base.Users.UserType>, string)') | Initializes a new instance of [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') with specified properties. |

| Properties | |
| :--- | :--- |
| [Id](UserSummary.Id.md 'Guilded.Base.Users.UserSummary.Id') | Gets The identifier of [user](User.md 'Guilded.Base.Users.User'). |
| [IsBot](UserSummary.IsBot.md 'Guilded.Base.Users.UserSummary.IsBot') | Gets whether the user is a [bot](UserType.md#Guilded.Base.Users.UserType.Bot 'Guilded.Base.Users.UserType.Bot'). |
| [Name](UserSummary.Name.md 'Guilded.Base.Users.UserSummary.Name') | Gets the global username of the user. |
| [Type](UserSummary.Type.md 'Guilded.Base.Users.UserSummary.Type') | Gets the type of the user they are. |

| Methods | |
| :--- | :--- |
| [AddRoleAsync(HashId, uint)](UserSummary.AddRoleAsync(HashId,uint).md 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint)') | Adds a [role](UserSummary.AddRoleAsync(HashId,uint).md#Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.AddRoleAsync(Guilded.Base.HashId, uint).role') to the user. |
| [AddXpAsync(HashId, short)](UserSummary.AddXpAsync(HashId,short).md 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short)') | Gives [amount](UserSummary.AddXpAsync(HashId,short).md#Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId,short).amount 'Guilded.Base.Users.UserSummary.AddXpAsync(Guilded.Base.HashId, short).amount') to the specified member. |
| [BanAsync(HashId, string)](UserSummary.BanAsync(HashId,string).md 'Guilded.Base.Users.UserSummary.BanAsync(Guilded.Base.HashId, string)') | Bans the specified member. |
| [DeleteNicknameAsync(HashId)](UserSummary.DeleteNicknameAsync(HashId).md 'Guilded.Base.Users.UserSummary.DeleteNicknameAsync(Guilded.Base.HashId)') | Deletes a message from a channel. |
| [GetBanAsync(HashId)](UserSummary.GetBanAsync(HashId).md 'Guilded.Base.Users.UserSummary.GetBanAsync(Guilded.Base.HashId)') | Gets the information about the ban of the member. |
| [GetSocialLinkAsync(HashId, SocialLinkType)](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType).md 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType)') | Gets the specified member social link based on given [linkType](UserSummary.GetSocialLinkAsync(HashId,SocialLinkType).md#Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId,Guilded.Base.Users.SocialLinkType).linkType 'Guilded.Base.Users.UserSummary.GetSocialLinkAsync(Guilded.Base.HashId, Guilded.Base.Users.SocialLinkType).linkType'). |
| [KickAsync(HashId)](UserSummary.KickAsync(HashId).md 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId)') | Removes the specified member from the [server](UserSummary.KickAsync(HashId).md#Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server 'Guilded.Base.Users.UserSummary.KickAsync(Guilded.Base.HashId).server'). |
| [RemoveRoleAsync(HashId, uint)](UserSummary.RemoveRoleAsync(HashId,uint).md 'Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId, uint)') | Removes a [role](UserSummary.RemoveRoleAsync(HashId,uint).md#Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId,uint).role 'Guilded.Base.Users.UserSummary.RemoveRoleAsync(Guilded.Base.HashId, uint).role') from the user. |
| [ToString()](UserSummary.ToString().md 'Guilded.Base.Users.UserSummary.ToString()') | Returns the string representation of this [UserSummary](UserSummary.md 'Guilded.Base.Users.UserSummary') instance. |
| [UnbanAsync(HashId)](UserSummary.UnbanAsync(HashId).md 'Guilded.Base.Users.UserSummary.UnbanAsync(Guilded.Base.HashId)') | Unbans the specified member. |
| [UpdateNicknameAsync(HashId, string)](UserSummary.UpdateNicknameAsync(HashId,string).md 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string)') | Changes the [nickname](UserSummary.UpdateNicknameAsync(HashId,string).md#Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).nickname 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string).nickname') of the specified member in the [server](UserSummary.UpdateNicknameAsync(HashId,string).md#Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId,string).server 'Guilded.Base.Users.UserSummary.UpdateNicknameAsync(Guilded.Base.HashId, string).server'). |

### See Also
- [User](User.md 'Guilded.Base.Users.User')
- [SocialLink](SocialLink.md 'Guilded.Base.Users.SocialLink')