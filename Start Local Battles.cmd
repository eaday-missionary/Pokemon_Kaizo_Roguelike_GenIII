@echo off
cd /d "%~dp0server"
set "LOCAL_NODE=%~dp0..\node-v26.13.1-win-x64\node-v26.13.1-win-x64\node.exe"
if not exist "%LOCAL_NODE%" set "LOCAL_NODE=node"
"%LOCAL_NODE%" local-battle.cjs
pause
