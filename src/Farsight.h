#pragma once
#include <string>
#include <set>
#include <queue>

#include "unit/GameObject.h"
#include "Snapshot.h"
#include "windows.h"

class Farsight
{
public:
    Farsight();

private:
    static const int MAX_UNITS = 1024;
    const unsigned int MAX_UINT = std::numeric_limits<unsigned int>::max();

    // process info
    HANDLE hProcess = NULL;
    DWORD pid = 0;
    HWND hWindow = NULL;

    // memory info
    DWORD_PTR baseAddress = 0;
    DWORD size = 0;
    BOOL isSixtyFourBit = FALSE;

    std::set<int> blacklistedObjects;
    std::set<std::string> blacklistedObjectNames;

    // timers adress
    DWORD_PTR GubsBase = 0;
    DWORD_PTR HeraldBase = 0;
    DWORD_PTR BaronBase = 0;
    DWORD_PTR DrakeBase = 0;

public:
    bool IsLeagueRunning();

    void HookToProcess();

    void UnhookFromProcess();

    bool IsHooked();

    void CreateSnapshot(Snapshot &snapshotn, Napi::Env env);

    void CreateChampionSnapshot(ChampionSnapshot &snapshot, Napi::Env env);

    static std::set<std::string> championNames;

private:
    void ClearMissingObjects(Snapshot &snapshot);

    void ReadObjects(Snapshot &snapshot, Napi::Env env);

    void ReadChampions(ChampionSnapshot &snapshot, Napi::Env env);

    void GetTimersAdress();

    void GetHUDObj(Snapshot &snapshot);

    void GetTimersValue(Snapshot &snapshot);
};