(function (_0x258039, _0xeed75e) {
  const _0x4aa4c2 = _0x3777,
    _0x3e1ccb = _0x258039();
  while (!![]) {
    try {
      const _0x2b5754 =
        (-parseInt(_0x4aa4c2(0x1d3)) / 0x1) *
          (-parseInt(_0x4aa4c2(0x1dd)) / 0x2) +
        (parseInt(_0x4aa4c2(0x1cc)) / 0x3) *
          (parseInt(_0x4aa4c2(0x1c9)) / 0x4) +
        parseInt(_0x4aa4c2(0x1d1)) / 0x5 +
        (-parseInt(_0x4aa4c2(0x1d2)) / 0x6) *
          (parseInt(_0x4aa4c2(0x1d5)) / 0x7) +
        (parseInt(_0x4aa4c2(0x1e2)) / 0x8) *
          (parseInt(_0x4aa4c2(0x1d7)) / 0x9) +
        (parseInt(_0x4aa4c2(0x1d4)) / 0xa) *
          (parseInt(_0x4aa4c2(0x1dc)) / 0xb) +
        -parseInt(_0x4aa4c2(0x1df)) / 0xc;
      if (_0x2b5754 === _0xeed75e) break;
      else _0x3e1ccb['push'](_0x3e1ccb['shift']());
    } catch (_0x49aa26) {
      _0x3e1ccb['push'](_0x3e1ccb['shift']());
    }
  }
})(_0x1764, 0x29646);
function _0x3777(_0x4afbb9, _0xe0b33e) {
  const _0x1764e3 = _0x1764();
  return (
    (_0x3777 = function (_0x3777fe, _0x179418) {
      _0x3777fe = _0x3777fe - 0x1c9;
      let _0xa9796e = _0x1764e3[_0x3777fe];
      return _0xa9796e;
    }),
    _0x3777(_0x4afbb9, _0xe0b33e)
  );
}
function _0x1764() {
  const _0x3dc6db = [
    '9dOZoWS',
    'application/json',
    'result',
    'Error\x20fetching\x20and\x20completing\x20quests:',
    'json',
    '937651RmLgBI',
    '234410vmpsCc',
    'POST',
    '7121376IYyJZp',
    'All\x20quests\x20are\x20already\x20completed.',
    'error',
    '2287608aAzYqi',
    '8hSribp',
    'Completed\x20quest:',
    'data',
    '430431akAMXd',
    'Mon\x20Protocol\x20Auto\x20Claimer\x20–\x20Happy\x20Cuan\x20Airdrop\x0aSubscribe:\x20https://t.me/HappyCuanAirdrop',
    'log',
    'quests',
    'https://app.monprotocol.ai/api/trpc/quests.quests',
    '520270WRafGW',
    '1092vAUGWz',
    '1USvzgi',
    '20XPGWgQ',
    '7756CodxXD',
    'https://app.monprotocol.ai/api/trpc/quests.setQuestCompletion',
  ];
  _0x1764 = function () {
    return _0x3dc6db;
  };
  return _0x1764();
}
async function fetchAndCompleteQuests() {
  const _0x33b3d0 = _0x3777;
  alert(_0x33b3d0(0x1cd));
  let _0x110786 = ![];
  try {
    const _0x51a248 = await fetch(_0x33b3d0(0x1d0)),
      _0xf2ed39 = await _0x51a248['json'](),
      _0x4e55ef =
        _0xf2ed39[_0x33b3d0(0x1d9)][_0x33b3d0(0x1cb)][_0x33b3d0(0x1db)];
    for (const _0x1aebf7 of _0x4e55ef) {
      _0x1aebf7['user_quest_completion'] === null &&
        (await completeQuest(_0x1aebf7[_0x33b3d0(0x1cf)]['id']),
        console[_0x33b3d0(0x1ce)](
          _0x33b3d0(0x1ca),
          _0x1aebf7[_0x33b3d0(0x1cf)]['id']
        ),
        (_0x110786 = !![]));
    }
  } catch (_0x576fc4) {
    console[_0x33b3d0(0x1e1)](_0x33b3d0(0x1da), _0x576fc4);
  }
  !_0x110786 && alert(_0x33b3d0(0x1e0));
}
async function completeQuest(_0x2d082c) {
  const _0x39d8b6 = _0x3777;
  try {
    const _0x1f97e9 = await fetch(_0x39d8b6(0x1d6), {
      method: _0x39d8b6(0x1de),
      headers: { Cookie: '', 'Content-Type': _0x39d8b6(0x1d8) },
      body: JSON['stringify']({ json: _0x2d082c }),
    });
    console[_0x39d8b6(0x1ce)](_0x1f97e9);
  } catch (_0x363511) {
    console[_0x39d8b6(0x1e1)]('Error\x20completing\x20quest:', _0x363511);
  }
}
fetchAndCompleteQuests();
