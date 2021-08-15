#### [Guilded.NET.Base](Guilded_NET_Base.md 'Guilded.NET.Base')
### [Guilded.NET.Base.Users](Guilded_NET_Base.md#Guilded_NET_Base_Users 'Guilded.NET.Base.Users').[Friend](Friend.md 'Guilded.NET.Base.Users.Friend')
## Friend.Status Property
A friendship status.  
```csharp
public Guilded.NET.Base.Users.FriendStatus Status { get; set; }
```
#### Property Value
[FriendStatus](FriendStatus.md 'Guilded.NET.Base.Users.FriendStatus')
Friendship status
### Remarks
The status of friendship between this user and client's user account.



Tells us whether:

<list type="bullet">
  <item>This user and client's user are friends</item>
  <item>This user sent a friend request to this client</item>
  <item>This client sent a request to this user</item>
</list>
