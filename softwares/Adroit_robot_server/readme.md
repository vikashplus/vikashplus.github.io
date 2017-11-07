# Adroit Server 
Awaits connections and serves clients requests. Server-Client communication is a socket based channel.

# V0 
```Release Data: 6th Nov'17```
## Changelog
1) Added a comcode hCOM_JNT. This update allows remote to directly request joint positions. A variable called `remote_request` is updated to reflect the remote request type -- desired_cmd, desired_jnts, exit.
2) When the socket disconnects the `remote_request` is updated to exit. `main_handRobot.cpp` moniots the status and exhausts all the actuators if connection is lost.
