@echo off
title Design Style Library - Live Automation
cls
echo ================================================================
echo   DESIGN STYLE LIBRARY - AUTOMATION RUNNER
echo ================================================================
echo Launching visible automation...
cd /d "%~dp0"
set TEST_RECORDING_WINDOW=1
node "create-test-library.js"
pause
