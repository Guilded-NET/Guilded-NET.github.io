---
title: Member
layout: references
section: references
tags:
  - references
  - class
description: "

A member in a member list.

```csharp
public class Member : Guilded.NET.Base.ClientObject
```"
---

## Member Class
###### **Assembly:** `Guilded.NET.Base`<br/>**Namespace:** [`Guilded.NET.Base.Servers`](Guilded.NET.Base.Servers 'Guilded.NET.Base.Servers')

A member in a member list.

```csharp
public class Member : Guilded.NET.Base.ClientObject
```

Inheritance [System.Object](https://docs.microsoft.com/en-us/dotnet/api/System.Object 'System.Object') &#129106; [BaseObject](BaseObject 'Guilded.NET.Base.BaseObject') &#129106; [ClientObject](ClientObject 'Guilded.NET.Base.ClientObject') &#129106; Member

### Remarks
  
Defines a normal or updated team member.

| Constructors | |
| :--- | :--- |
| [Member(HashId, string)](Member.Member(HashId,string) 'Guilded.NET.Base.Servers.Member.Member(Guilded.NET.Base.HashId, string)') | Creates a new instance of [Member](Member 'Guilded.NET.Base.Servers.Member') with specified properties. |

| Properties | |
| :--- | :--- |
| [Id](Member.Id 'Guilded.NET.Base.Servers.Member.Id') | The identifier of this member. |
| [Nickname](Member.Nickname 'Guilded.NET.Base.Servers.Member.Nickname') | A nickname of this member. |

| Methods | |
| :--- | :--- |
| [AddRoleAsync(HashId, uint)](Member.AddRoleAsync(HashId,uint) 'Guilded.NET.Base.Servers.Member.AddRoleAsync(Guilded.NET.Base.HashId, uint)') | Adds a role to the user. |
| [AddXpAsync(HashId, short)](Member.AddXpAsync(HashId,short) 'Guilded.NET.Base.Servers.Member.AddXpAsync(Guilded.NET.Base.HashId, short)') | Adds XP to the user. |
| [DeleteNicknameAsync(HashId)](Member.DeleteNicknameAsync(HashId) 'Guilded.NET.Base.Servers.Member.DeleteNicknameAsync(Guilded.NET.Base.HashId)') | Deletes the message. |
| [GetSocialLinkAsync(HashId, SocialLinkType)](Member.GetSocialLinkAsync(HashId,SocialLinkType) 'Guilded.NET.Base.Servers.Member.GetSocialLinkAsync(Guilded.NET.Base.HashId, Guilded.NET.Base.Users.SocialLinkType)') | Gets the specified user's social links. |
| [RemoveRoleAsync(HashId, uint)](Member.RemoveRoleAsync(HashId,uint) 'Guilded.NET.Base.Servers.Member.RemoveRoleAsync(Guilded.NET.Base.HashId, uint)') | Removes a role from the user. |
| [UpdateNicknameAsync(HashId, string)](Member.UpdateNicknameAsync(HashId,string) 'Guilded.NET.Base.Servers.Member.UpdateNicknameAsync(Guilded.NET.Base.HashId, string)') | Updates the member's nickname. |

### See Also
- [MemberUpdatedEvent](MemberUpdatedEvent 'Guilded.NET.Base.Events.MemberUpdatedEvent')