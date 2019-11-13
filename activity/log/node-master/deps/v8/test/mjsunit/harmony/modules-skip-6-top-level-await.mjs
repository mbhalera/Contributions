// Copyright 2019 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import * as m1 from 'modules-skip-3-top-level-await.mjs';

let m2 = await import('modules-skip-1.mjs');

export { m1, m2 };

