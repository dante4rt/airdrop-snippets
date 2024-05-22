const _0x1e62b4 = _0x5dd1;
(function (_0x40b1c7, _0x39fa19) {
  const _0x7f1faa = _0x5dd1,
    _0x484bd9 = _0x40b1c7();
  while (!![]) {
    try {
      const _0x559959 =
        parseInt(_0x7f1faa(0xdb)) / 0x1 +
        (-parseInt(_0x7f1faa(0xec)) / 0x2) *
          (-parseInt(_0x7f1faa(0xdc)) / 0x3) +
        (-parseInt(_0x7f1faa(0xe5)) / 0x4) * (parseInt(_0x7f1faa(0xed)) / 0x5) +
        parseInt(_0x7f1faa(0xdd)) / 0x6 +
        parseInt(_0x7f1faa(0xd6)) / 0x7 +
        parseInt(_0x7f1faa(0xe2)) / 0x8 +
        (-parseInt(_0x7f1faa(0xd7)) / 0x9) * (parseInt(_0x7f1faa(0xe6)) / 0xa);
      if (_0x559959 === _0x39fa19) break;
      else _0x484bd9['push'](_0x484bd9['shift']());
    } catch (_0x67020c) {
      _0x484bd9['push'](_0x484bd9['shift']());
    }
  }
})(_0x593f, 0x222ae),
  alert(_0x1e62b4(0xe8));
const accessToken = prompt(_0x1e62b4(0xde));
async function fetchQuests() {
  const _0x3b6b65 = _0x1e62b4;
  try {
    if (!accessToken) {
      console[_0x3b6b65(0xeb)](_0x3b6b65(0xd9));
      return;
    }
    const _0x486378 = await fetch(_0x3b6b65(0xe1), {
        method: _0x3b6b65(0xe0),
        headers: {
          Cookie: '',
          'Content-Type': _0x3b6b65(0xd4),
          Authorization: accessToken,
        },
        body: JSON[_0x3b6b65(0xd5)]({}),
      }),
      _0x1ed397 = await _0x486378[_0x3b6b65(0xe4)](),
      _0x2a904e = _0x1ed397[_0x3b6b65(0xdf)][_0x3b6b65(0xd8)](
        (_0x2be7b8) =>
          !_0x2be7b8[_0x3b6b65(0xea)] && !_0x2be7b8[_0x3b6b65(0xe7)]
      );
    for (const _0x745eb0 of _0x2a904e) {
      await clearQuest(_0x745eb0['taskId']),
        await claimQuest(_0x745eb0[_0x3b6b65(0xda)]);
    }
    alert('All\x20tasks\x20claimed\x20successfully!');
  } catch (_0xb27c85) {
    console['log']('Error\x20in\x20Fetch\x20Quests:\x20' + _0xb27c85);
  }
}
function _0x593f() {
  const _0x15610c = [
    'data',
    'POST',
    'https://paramgaming.com/api/v1/user/getUserTasks',
    '1601856QYAsdD',
    'Error\x20in\x20Clear\x20Quest:',
    'json',
    '4tILiKG',
    '300XSDEsK',
    'taskClaimed',
    'Param\x20Gaming\x20Auto\x20Claimer\x20–\x20HappyCuanAirdrop\x0aSubscribe:\x20https://t.me/HappyCuanAirdrop',
    'Error\x20in\x20Claim\x20Quest:\x20',
    'taskCompleted',
    'log',
    '3788jnJEvn',
    '880135woyHpl',
    'https://paramgaming.com/api/v1/user/executeTask',
    'Clear\x20task\x20success\x20for\x20task\x20ID:',
    'application/json',
    'stringify',
    '1762663fVzAej',
    '232992jZYHMp',
    'filter',
    'Authorization\x20token\x20is\x20required.',
    'taskId',
    '197569SQoEVb',
    '381hhAxky',
    '1214814HFvtmW',
    'Please\x20enter\x20your\x20authorization\x20token:',
  ];
  _0x593f = function () {
    return _0x15610c;
  };
  return _0x593f();
}
async function clearQuest(_0x8f11fa) {
  const _0x3aac1a = _0x1e62b4;
  try {
    const _0x4083e7 = await fetch(_0x3aac1a(0xd2), {
      method: _0x3aac1a(0xe0),
      body: JSON[_0x3aac1a(0xd5)]({ taskId: _0x8f11fa }),
      headers: { Authorization: accessToken, 'Content-Type': _0x3aac1a(0xd4) },
    });
    console[_0x3aac1a(0xeb)](_0x3aac1a(0xd3), _0x8f11fa);
  } catch (_0x4bae50) {
    console[_0x3aac1a(0xeb)](_0x3aac1a(0xe3), _0x4bae50);
  }
}
function _0x5dd1(_0x2c985a, _0x1dd3c1) {
  const _0x593f20 = _0x593f();
  return (
    (_0x5dd1 = function (_0x5dd1df, _0x56b376) {
      _0x5dd1df = _0x5dd1df - 0xd2;
      let _0x304642 = _0x593f20[_0x5dd1df];
      return _0x304642;
    }),
    _0x5dd1(_0x2c985a, _0x1dd3c1)
  );
}
async function claimQuest(_0x27e2d7) {
  const _0x3e6c70 = _0x1e62b4;
  try {
    const _0x58cea7 = await fetch(
      'https://paramgaming.com/api/v1/user/claimTaskRewards',
      {
        method: _0x3e6c70(0xe0),
        headers: {
          Authorization: accessToken,
          'Content-Type': _0x3e6c70(0xd4),
        },
        body: JSON[_0x3e6c70(0xd5)]({ taskId: _0x27e2d7 }),
      }
    );
    console[_0x3e6c70(0xeb)](
      'Claim\x20task\x20success\x20for\x20task\x20ID:',
      _0x27e2d7
    );
  } catch (_0x3f660d) {
    console[_0x3e6c70(0xeb)](_0x3e6c70(0xe9), _0x3f660d);
  }
}
fetchQuests();
