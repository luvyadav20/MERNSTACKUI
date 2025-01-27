import React from 'react';
import Header from './components/header';

import RealTimeData from './components/RealTimeData';
import HistoricalDataTable from './components/HistoricalDataTable';

import './App.css'; 

const App = () => {
    
    const realTimeData = {
        timestamp: '2024-01-21T15:00:02Z',
        machineStatus: 1,
        vibration: 536
    };

    const historicalData = [
            {
                "ts": "2024-01-21T15:00:00Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:00:01Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:00:02Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:00:03Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:00:04Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:00:05Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:00:06Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:00:07Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:00:08Z",
                "machine_status": 1,
                "vibration": 519
            },
            {
                "ts": "2024-01-21T15:00:09Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:00:10Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:00:11Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:00:12Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:00:13Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:00:14Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:00:15Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:00:16Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:00:17Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:00:18Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:00:19Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:00:20Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:00:21Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:00:23Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:00:24Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:00:25Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:00:26Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:00:27Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:00:28Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:00:29Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:00:30Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:00:31Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:00:32Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:00:33Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:00:34Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:00:36Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:00:37Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:00:38Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:00:39Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:00:40Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:00:41Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:00:42Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:00:43Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:00:44Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T15:00:45Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:00:46Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:00:47Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:00:48Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:00:49Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:00:50Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:00:51Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:00:52Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:00:53Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:00:54Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:00:55Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:00:56Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:00:57Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:00:58Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:00:59Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:01:00Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:01:01Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:01:02Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:01:03Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:01:04Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:01:06Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:01:08Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:01:09Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:01:10Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:01:11Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:01:12Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:01:13Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:01:14Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:01:15Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:01:16Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:01:17Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:01:18Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:01:20Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:01:21Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:01:22Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:01:24Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:01:25Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:01:26Z",
                "machine_status": 1,
                "vibration": 92
            },
            {
                "ts": "2024-01-21T15:01:27Z",
                "machine_status": 1,
                "vibration": -3
            },
            {
                "ts": "2024-01-21T15:01:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:01:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:01:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:01:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:01:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:01:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:01:57Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:01:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:01:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:02:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:20Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:02:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:39Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:02:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:02:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:02:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:02:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:02:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:02:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:04Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:03:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:03:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:03:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:03:53Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:03:54Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:03:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:03:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:02Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:04:04Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:04:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:04:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:04:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:04:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:04:26Z",
                "machine_status": 0,
                "vibration": 954
            },
            {
                "ts": "2024-01-21T15:04:27Z",
                "machine_status": 0,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:04:28Z",
                "machine_status": 0,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:04:29Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:04:30Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:04:31Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:04:32Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:04:34Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:04:35Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:04:36Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:04:38Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:04:39Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:04:40Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:04:41Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:04:42Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:04:43Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:04:44Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:04:45Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:04:46Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:04:47Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:04:48Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:04:49Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:04:50Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T15:04:51Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:04:52Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:04:53Z",
                "machine_status": 1,
                "vibration": 507
            },
            {
                "ts": "2024-01-21T15:04:54Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:04:55Z",
                "machine_status": 1,
                "vibration": 499
            },
            {
                "ts": "2024-01-21T15:04:57Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:04:58Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:04:59Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:05:01Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:05:02Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:05:04Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:05:06Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:05:07Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:05:08Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:05:09Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:05:10Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:05:12Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:05:13Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:05:15Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:05:20Z",
                "machine_status": 0,
                "vibration": 77
            },
            {
                "ts": "2024-01-21T15:05:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:33Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:05:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:05:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:05:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:05:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:05:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:05:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:06:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:06:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:06:59Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:07:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:01Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:07:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:07:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:32Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:33Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:07:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:07:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:07:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:07:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:07:53Z",
                "machine_status": 1,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:54Z",
                "machine_status": 1,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:07:55Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:07:56Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:07:57Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:07:58Z",
                "machine_status": 1,
                "vibration": 507
            },
            {
                "ts": "2024-01-21T15:07:59Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:08:00Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:08:01Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:08:02Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:08:03Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:08:04Z",
                "machine_status": 1,
                "vibration": 523
            },
            {
                "ts": "2024-01-21T15:08:05Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:08:06Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:08:07Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:08:08Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:08:09Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:08:10Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:08:11Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:08:12Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:08:13Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:08:14Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:08:15Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:08:16Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:08:17Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:08:18Z",
                "machine_status": 1,
                "vibration": 510
            },
            {
                "ts": "2024-01-21T15:08:19Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:08:20Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:08:21Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:08:22Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:08:23Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:08:24Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:08:25Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:08:26Z",
                "machine_status": 1,
                "vibration": 504
            },
            {
                "ts": "2024-01-21T15:08:27Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:08:28Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:08:29Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:08:30Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:08:31Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:08:32Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:08:33Z",
                "machine_status": 1,
                "vibration": 102
            },
            {
                "ts": "2024-01-21T15:08:35Z",
                "machine_status": 0,
                "vibration": 102
            },
            {
                "ts": "2024-01-21T15:08:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:45Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:08:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:08:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:08:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:08:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:08:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:08:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:08:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:09:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:09:30Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:31Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:09:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:09:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:39Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:09:40Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:45Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:09:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:09:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:09:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:09:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:09:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:18Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:21Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:29Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:30Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:31Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:10:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:38Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:10:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:10:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:10:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:10:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:11:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:11:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:11:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:11:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:11:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:11:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:11:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:11:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:11:27Z",
                "machine_status": 0,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:11:28Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:11:29Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:11:30Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:11:32Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:11:33Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:11:34Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:11:35Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:11:36Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:11:37Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:11:38Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:11:39Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:11:40Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:11:41Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:11:42Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:11:43Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:11:44Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:11:45Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:11:47Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T15:11:49Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:11:50Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:11:51Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:11:52Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:11:53Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:11:54Z",
                "machine_status": 1,
                "vibration": 515
            },
            {
                "ts": "2024-01-21T15:11:55Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:11:57Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:11:58Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:11:59Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:12:00Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:12:01Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:12:02Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:12:03Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:12:04Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:12:06Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:12:07Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:12:08Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:12:09Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:12:10Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:12:11Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:12:12Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:12:13Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:12:14Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:12:15Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:12:16Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:12:17Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:12:18Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:12:19Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:12:20Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:12:21Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:12:22Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:12:23Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:12:24Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:12:25Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:12:26Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:12:27Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:12:28Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:12:29Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:12:30Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:12:31Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:12:33Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:12:35Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:12:37Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:12:38Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:12:39Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:12:40Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:12:42Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:12:43Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:12:44Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:12:45Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:12:46Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:12:47Z",
                "machine_status": 1,
                "vibration": 504
            },
            {
                "ts": "2024-01-21T15:12:48Z",
                "machine_status": 1,
                "vibration": 519
            },
            {
                "ts": "2024-01-21T15:12:49Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:12:50Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:12:51Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:12:52Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:12:53Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:12:54Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:12:55Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:12:56Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:12:57Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:12:58Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:13:00Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:13:02Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:13:03Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:13:04Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:13:05Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:13:06Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:13:07Z",
                "machine_status": 1,
                "vibration": -3
            },
            {
                "ts": "2024-01-21T15:13:08Z",
                "machine_status": 0,
                "vibration": 2
            },
            {
                "ts": "2024-01-21T15:13:10Z",
                "machine_status": 0,
                "vibration": 2
            },
            {
                "ts": "2024-01-21T15:13:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:21Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:13:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:13:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:13:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:13:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:13:59Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:14:01Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:14:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:14:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:14:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:14:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:14:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:14:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:52Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:14:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:14:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:14:57Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:14:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:14:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:08Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:15:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:15:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:15:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:15:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:15:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:15:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:15:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:15:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:15:35Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:15:36Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:15:37Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T15:15:38Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:15:40Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:15:41Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:15:43Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:15:45Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:15:46Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:15:47Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:15:48Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:15:49Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:15:51Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:15:52Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:15:53Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T15:15:54Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:15:56Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:15:57Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:15:58Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:15:59Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:16:00Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T15:16:01Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:16:03Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:16:05Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:16:06Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:16:07Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:16:08Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:16:09Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:16:10Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:16:11Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:16:12Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:16:14Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:16:15Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:16:16Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:16:17Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:16:18Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:16:20Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:16:21Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:16:22Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:16:23Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:16:26Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:16:27Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:16:28Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:16:30Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:16:31Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:16:32Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:16:33Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:16:34Z",
                "machine_status": 1,
                "vibration": 575
            },
            {
                "ts": "2024-01-21T15:16:35Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:16:37Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:16:38Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:16:39Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:16:40Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:16:41Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:16:42Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:16:46Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:16:47Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:16:48Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:16:49Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:16:50Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:16:51Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:16:52Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:16:54Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:16:55Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:16:56Z",
                "machine_status": 1,
                "vibration": 129
            },
            {
                "ts": "2024-01-21T15:16:57Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T15:16:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:16:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:17:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:17:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:09Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:17:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:17:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:17:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:15Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:17:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:17:21Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:17:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:17:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:17:32Z",
                "machine_status": 1,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:17:34Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:17:35Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:17:37Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:17:38Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:17:40Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:17:41Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:17:42Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:17:45Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:17:46Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:17:48Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:17:49Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:17:50Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:17:51Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:17:52Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:17:53Z",
                "machine_status": 1,
                "vibration": 510
            },
            {
                "ts": "2024-01-21T15:17:54Z",
                "machine_status": 1,
                "vibration": 510
            },
            {
                "ts": "2024-01-21T15:17:55Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:17:56Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:17:57Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:17:58Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:17:59Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:18:00Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:18:01Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:18:02Z",
                "machine_status": 1,
                "vibration": 521
            },
            {
                "ts": "2024-01-21T15:18:04Z",
                "machine_status": 1,
                "vibration": 444
            },
            {
                "ts": "2024-01-21T15:18:07Z",
                "machine_status": 1,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:18:08Z",
                "machine_status": 1,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:18:10Z",
                "machine_status": 1,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:18:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:18:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:18:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:18:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:18:57Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:18:58Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:18:59Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:19:00Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:19:01Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T15:19:02Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:19:03Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:19:04Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:19:06Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:19:07Z",
                "machine_status": 0,
                "vibration": 116
            },
            {
                "ts": "2024-01-21T15:19:08Z",
                "machine_status": 0,
                "vibration": 116
            },
            {
                "ts": "2024-01-21T15:19:09Z",
                "machine_status": 0,
                "vibration": 7
            },
            {
                "ts": "2024-01-21T15:19:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:19:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:19:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:19:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:19:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:19:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:19:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:19:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:19:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:19:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:19:49Z",
                "machine_status": 0,
                "vibration": 600
            },
            {
                "ts": "2024-01-21T15:19:50Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:19:51Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:19:52Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:19:53Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:19:54Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:19:55Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:19:56Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:19:57Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:19:58Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:19:59Z",
                "machine_status": 1,
                "vibration": 516
            },
            {
                "ts": "2024-01-21T15:20:00Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:20:01Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:20:02Z",
                "machine_status": 1,
                "vibration": 513
            },
            {
                "ts": "2024-01-21T15:20:03Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:20:04Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:20:06Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:20:07Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:20:08Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:20:09Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:20:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:20:22Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:20:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:20:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:20:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:20:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:20:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:20:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:06Z",
                "machine_status": 1,
                "vibration": 804
            },
            {
                "ts": "2024-01-21T15:21:14Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:21:17Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:21:18Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:21:19Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:21:24Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:21:28Z",
                "machine_status": 1,
                "vibration": 646
            },
            {
                "ts": "2024-01-21T15:21:29Z",
                "machine_status": 1,
                "vibration": 36
            },
            {
                "ts": "2024-01-21T15:21:30Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:21:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:21:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:21:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:35Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:21:37Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:21:38Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:21:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:21:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:21:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:21:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:21:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:22:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:22:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:22:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:21Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:22:24Z",
                "machine_status": 1,
                "vibration": 609
            },
            {
                "ts": "2024-01-21T15:22:25Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:22:26Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:22:27Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:22:28Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:22:29Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:22:30Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:22:31Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:22:32Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:22:33Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:22:34Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:22:35Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:22:36Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:22:38Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:22:39Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:22:40Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T15:22:41Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:22:42Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:22:43Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:22:44Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:22:45Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:22:46Z",
                "machine_status": 1,
                "vibration": 68
            },
            {
                "ts": "2024-01-21T15:22:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:22:52Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:22:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:22:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:22:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:23:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:23:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:23:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:23:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:23:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:23:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:23:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:21Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:23:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:28Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:23:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:23:33Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:23:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:23:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:23:38Z",
                "machine_status": 0,
                "vibration": 665
            },
            {
                "ts": "2024-01-21T15:23:39Z",
                "machine_status": 1,
                "vibration": 521
            },
            {
                "ts": "2024-01-21T15:23:41Z",
                "machine_status": 1,
                "vibration": 521
            },
            {
                "ts": "2024-01-21T15:23:42Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:23:43Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:23:44Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:23:45Z",
                "machine_status": 1,
                "vibration": 513
            },
            {
                "ts": "2024-01-21T15:23:46Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:23:47Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:23:48Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:23:50Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:23:51Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:23:52Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:23:54Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:23:55Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:23:56Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:23:57Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:23:58Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:23:59Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:24:00Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:24:01Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:24:02Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:24:03Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:24:04Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:24:05Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:24:06Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:24:07Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:24:08Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T15:24:09Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:24:11Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:24:12Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:24:13Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:24:14Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:24:15Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:24:16Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:24:18Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:24:20Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:24:21Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:24:22Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:24:23Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:24:24Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:24:25Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:24:26Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:24:27Z",
                "machine_status": 1,
                "vibration": 25
            },
            {
                "ts": "2024-01-21T15:24:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:32Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:37Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:38Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:24:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:24:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:24:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:24:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:24:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:57Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:24:58Z",
                "machine_status": 1,
                "vibration": 1196
            },
            {
                "ts": "2024-01-21T15:24:59Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:25:00Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:25:01Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:25:02Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:25:03Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:25:05Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:25:06Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:25:07Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:25:08Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:25:09Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:25:10Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:25:11Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:25:13Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:25:15Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:25:20Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:25:21Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:25:22Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:25:23Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:25:25Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:25:26Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:25:27Z",
                "machine_status": 1,
                "vibration": 598
            },
            {
                "ts": "2024-01-21T15:25:28Z",
                "machine_status": 1,
                "vibration": 598
            },
            {
                "ts": "2024-01-21T15:25:29Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:25:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:25:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:25:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:25:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:25:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:25:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:25:52Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:25:53Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:25:54Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:25:55Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:25:56Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:25:57Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:25:59Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:26:00Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:26:01Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:26:02Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:26:03Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:26:04Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:26:05Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:26:06Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:26:07Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:26:08Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:26:09Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:26:10Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:26:11Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:26:12Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:26:13Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:26:15Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:26:16Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:26:17Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:26:18Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:26:19Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:26:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:26:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:26:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:26:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:42Z",
                "machine_status": 1,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:26:43Z",
                "machine_status": 1,
                "vibration": 632
            },
            {
                "ts": "2024-01-21T15:26:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:26:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:26:52Z",
                "machine_status": 0,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T15:26:54Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:26:55Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:26:56Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:26:57Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:26:58Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:26:59Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:27:00Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:27:01Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:27:02Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:27:03Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:27:04Z",
                "machine_status": 1,
                "vibration": 515
            },
            {
                "ts": "2024-01-21T15:27:05Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:27:06Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:27:07Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:27:08Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:27:09Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:27:10Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:27:11Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:27:12Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:27:13Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:27:14Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:27:15Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:27:16Z",
                "machine_status": 1,
                "vibration": 500
            },
            {
                "ts": "2024-01-21T15:27:17Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:27:18Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:27:19Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:27:20Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:27:21Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:27:22Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:27:23Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:27:24Z",
                "machine_status": 1,
                "vibration": 502
            },
            {
                "ts": "2024-01-21T15:27:25Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:27:26Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:27:27Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:27:28Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:27:29Z",
                "machine_status": 1,
                "vibration": 511
            },
            {
                "ts": "2024-01-21T15:27:30Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:27:31Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:27:33Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:27:34Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:27:38Z",
                "machine_status": 1,
                "vibration": 507
            },
            {
                "ts": "2024-01-21T15:27:39Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:27:41Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:27:42Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:27:44Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:27:46Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:27:47Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:27:48Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:27:49Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:27:50Z",
                "machine_status": 1,
                "vibration": 508
            },
            {
                "ts": "2024-01-21T15:27:51Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:27:53Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:27:54Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:27:55Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:27:56Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:27:57Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:27:58Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:27:59Z",
                "machine_status": 0,
                "vibration": 478
            },
            {
                "ts": "2024-01-21T15:28:00Z",
                "machine_status": 0,
                "vibration": 12
            },
            {
                "ts": "2024-01-21T15:28:01Z",
                "machine_status": 0,
                "vibration": -3
            },
            {
                "ts": "2024-01-21T15:28:02Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:28:03Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:10Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:28:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:29Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:35Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:28:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:28:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:28:40Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:28:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:28:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:28:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:28:51Z",
                "machine_status": 0,
                "vibration": 107
            },
            {
                "ts": "2024-01-21T15:28:52Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:28:53Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:28:54Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:28:55Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:28:56Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:28:58Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:28:59Z",
                "machine_status": 1,
                "vibration": 516
            },
            {
                "ts": "2024-01-21T15:29:00Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:29:01Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:29:02Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:29:03Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:29:05Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:29:07Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T15:29:08Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:29:09Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:29:10Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:29:11Z",
                "machine_status": 1,
                "vibration": 508
            },
            {
                "ts": "2024-01-21T15:29:12Z",
                "machine_status": 1,
                "vibration": 508
            },
            {
                "ts": "2024-01-21T15:29:13Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:29:14Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:29:15Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:29:16Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:29:17Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:29:18Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:29:19Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:29:20Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:29:21Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:29:22Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:29:24Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:29:25Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:29:26Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:29:27Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:29:28Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:29:29Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:29:30Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:29:31Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:29:32Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T15:29:33Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:29:34Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:29:35Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:29:36Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:29:37Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:29:38Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:29:39Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:29:40Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:29:41Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:29:42Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:29:43Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:29:45Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:29:47Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T15:29:48Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T15:29:49Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:29:50Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:29:51Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:29:53Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:29:54Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:29:55Z",
                "machine_status": 0,
                "vibration": 380
            },
            {
                "ts": "2024-01-21T15:29:56Z",
                "machine_status": 0,
                "vibration": 380
            },
            {
                "ts": "2024-01-21T15:29:57Z",
                "machine_status": 0,
                "vibration": 64
            },
            {
                "ts": "2024-01-21T15:29:58Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:29:59Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:30:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:05Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:30:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:13Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:30:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:20Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:30:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:22Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:23Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:30:24Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T15:30:25Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:30:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:45Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:30:46Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:30:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:30:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:30:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:30:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:30:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:30:58Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:30:59Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:31:00Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:28Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:31:29Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:31:30Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:31:31Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:32Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:31:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:31:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:31:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:31:59Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:32:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:13Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:32:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:21Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:32:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:32:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:32:26Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:32:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:32:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:32:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:32:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:33:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:33:20Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:33:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:33:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:33:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:33:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:47Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:33:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:33:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:33:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:33:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:33:59Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:00Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:08Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:34:09Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:34:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:11Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:34:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:13Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:14Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:20Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:21Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:27Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:35Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:34:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:34:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:34:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:34:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:01Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:35:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:35:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:35:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:35:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:53Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:35:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:35:57Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:35:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:35:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:00Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:36:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:06Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:36:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:12Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:36:13Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:36:14Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:36:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:36:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:36:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:36:23Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:36:24Z",
                "machine_status": 1,
                "vibration": 625
            },
            {
                "ts": "2024-01-21T15:36:25Z",
                "machine_status": 1,
                "vibration": 513
            },
            {
                "ts": "2024-01-21T15:36:26Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:36:27Z",
                "machine_status": 1,
                "vibration": 604
            },
            {
                "ts": "2024-01-21T15:36:28Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:36:29Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:36:30Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:36:31Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:36:32Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:36:34Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:36:35Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:36:36Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:36:37Z",
                "machine_status": 1,
                "vibration": 508
            },
            {
                "ts": "2024-01-21T15:36:38Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:36:39Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:36:40Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:36:41Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:36:42Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:36:43Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:36:44Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:36:45Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:36:46Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:36:47Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:36:48Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:36:49Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:36:50Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:36:54Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:36:55Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:36:56Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:36:57Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:36:58Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:36:59Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:37:01Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:37:02Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:37:03Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:37:04Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:37:05Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:37:06Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:37:07Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:37:08Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:37:09Z",
                "machine_status": 1,
                "vibration": 511
            },
            {
                "ts": "2024-01-21T15:37:11Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:37:12Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:37:13Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:37:14Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:37:15Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:37:16Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:37:17Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:37:19Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:37:20Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:37:21Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:37:22Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:37:23Z",
                "machine_status": 1,
                "vibration": 513
            },
            {
                "ts": "2024-01-21T15:37:24Z",
                "machine_status": 1,
                "vibration": 523
            },
            {
                "ts": "2024-01-21T15:37:25Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:37:26Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:37:27Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:37:28Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:37:29Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T15:37:31Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:37:37Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:37:38Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:37:39Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:37:40Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:37:41Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:37:42Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:37:43Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:37:44Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:37:45Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:37:46Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:37:47Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:37:48Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:37:49Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:37:50Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:37:51Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:37:52Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:37:54Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:37:55Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:37:56Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:37:57Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:37:58Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:37:59Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:38:00Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:38:01Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:38:02Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:38:03Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:38:04Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:38:05Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:38:06Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:38:07Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:38:08Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:38:09Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:38:10Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:38:11Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:38:12Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:38:13Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:38:14Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:38:15Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T15:38:16Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:38:17Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:38:18Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:38:19Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:38:20Z",
                "machine_status": 1,
                "vibration": 585
            },
            {
                "ts": "2024-01-21T15:38:21Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:38:22Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:38:23Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:38:25Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:38:26Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:38:27Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:38:28Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T15:38:29Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:38:30Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:38:31Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:38:32Z",
                "machine_status": 1,
                "vibration": 585
            },
            {
                "ts": "2024-01-21T15:38:33Z",
                "machine_status": 1,
                "vibration": 571
            },
            {
                "ts": "2024-01-21T15:38:34Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:38:35Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:38:36Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T15:38:37Z",
                "machine_status": 1,
                "vibration": 510
            },
            {
                "ts": "2024-01-21T15:38:38Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:38:39Z",
                "machine_status": 1,
                "vibration": 587
            },
            {
                "ts": "2024-01-21T15:38:40Z",
                "machine_status": 1,
                "vibration": 587
            },
            {
                "ts": "2024-01-21T15:38:41Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:38:42Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:38:43Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:38:44Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:38:45Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:38:46Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:38:47Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:38:48Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:38:50Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:38:51Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:38:52Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:38:53Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:38:54Z",
                "machine_status": 1,
                "vibration": 571
            },
            {
                "ts": "2024-01-21T15:38:55Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:38:56Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:38:57Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:38:58Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:38:59Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:39:00Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:39:01Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:39:02Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:39:03Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:39:06Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:39:07Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:39:08Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:39:09Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:39:10Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:39:11Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:39:12Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:39:13Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:39:16Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:39:17Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:39:18Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:39:19Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:39:20Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:39:21Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:39:22Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:39:23Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:39:24Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:39:25Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:39:27Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:39:28Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:39:30Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:39:31Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T15:39:32Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:39:33Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:39:35Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:39:36Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:39:37Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:39:39Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:39:40Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:39:43Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:39:44Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:39:45Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:39:46Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:39:47Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:39:48Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:39:49Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:39:50Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:39:51Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:39:52Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:39:53Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:39:55Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T15:39:56Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T15:39:57Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:39:58Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:40:00Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:40:01Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:40:03Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:40:05Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:40:06Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:40:07Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:40:09Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:40:11Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:40:12Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:40:13Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:40:14Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:40:15Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:40:16Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:40:17Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:40:18Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:40:19Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:40:23Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T15:40:24Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:40:25Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:40:26Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:40:27Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:40:28Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:40:29Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:40:30Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:40:31Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:40:32Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:40:34Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:40:35Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T15:40:36Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:40:38Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:40:39Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:40:40Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:40:41Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:40:43Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:40:44Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:40:45Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:40:46Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:40:53Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T15:40:54Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:40:55Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:40:56Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:40:58Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:40:59Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:41:00Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:41:01Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:41:02Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:41:03Z",
                "machine_status": 0,
                "vibration": 61
            },
            {
                "ts": "2024-01-21T15:41:04Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:41:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:41:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:08Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:12Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:41:13Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:41:14Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:41:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:17Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:41:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:33Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:45Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:41:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:41:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:41:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:52Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:41:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:41:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:41:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:42:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:42:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:42:14Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:42:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:42:17Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:42:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:22Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:42:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:42:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:45Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:42:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:42:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:42:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:42:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:42:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:43:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:43:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:13Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:43:14Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:43:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:43:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:43:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:43:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:43:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:43:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:43:34Z",
                "machine_status": 1,
                "vibration": 948
            },
            {
                "ts": "2024-01-21T15:43:35Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:43:36Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:43:37Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T15:43:38Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:43:39Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:43:40Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T15:43:41Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:43:42Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:43:44Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:43:45Z",
                "machine_status": 1,
                "vibration": 586
            },
            {
                "ts": "2024-01-21T15:43:46Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:43:47Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:43:48Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:43:49Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:43:50Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:43:51Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:43:52Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T15:43:53Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T15:43:54Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:43:55Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:43:56Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:43:57Z",
                "machine_status": 1,
                "vibration": 604
            },
            {
                "ts": "2024-01-21T15:43:58Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:43:59Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:44:00Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:44:01Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:44:02Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:44:03Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:44:04Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:44:05Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:44:06Z",
                "machine_status": 1,
                "vibration": 66
            },
            {
                "ts": "2024-01-21T15:44:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:44:08Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:44:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:14Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:44:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:44:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:44:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:44:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:44:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:44:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:44:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:44:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:33Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:44:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:44:42Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:44:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:44:49Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:44:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:44:51Z",
                "machine_status": 0,
                "vibration": 912
            },
            {
                "ts": "2024-01-21T15:44:52Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:44:53Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:44:54Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T15:44:55Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:44:56Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:44:57Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:44:58Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:44:59Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:45:01Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:45:02Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:45:03Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:45:04Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:45:07Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:45:08Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:45:09Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:45:10Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:45:11Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:45:12Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:45:13Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:45:14Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:45:15Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:45:16Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:45:17Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:45:18Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:45:19Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:45:20Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:45:21Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T15:45:22Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:45:23Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:45:24Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:45:25Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:45:26Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:45:27Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:45:28Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:45:29Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:45:30Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:45:31Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:45:32Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:45:33Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:45:34Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:45:35Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:45:36Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:45:37Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T15:45:38Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:45:39Z",
                "machine_status": 1,
                "vibration": 86
            },
            {
                "ts": "2024-01-21T15:45:40Z",
                "machine_status": 0,
                "vibration": 86
            },
            {
                "ts": "2024-01-21T15:45:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:45:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:45:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:45:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:45:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:45:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:45:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:45:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:45:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:45:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:45:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:45:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:46:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:46:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:05Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:22Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:26Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:46:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:33Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:35Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:46:40Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:46:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:54Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:46:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:46:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:46:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:46:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:47:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:47:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:47:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:47:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:47:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:47:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:47:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:47:27Z",
                "machine_status": 1,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:47:28Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T15:47:29Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:47:30Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:47:31Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:47:32Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T15:47:33Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:47:34Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:47:35Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:47:36Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:47:37Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:47:38Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T15:47:39Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:47:40Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:47:41Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:47:42Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:47:43Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:47:44Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:47:45Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:47:46Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:47:47Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:47:48Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:47:49Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:47:50Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:47:51Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:47:52Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T15:47:53Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:47:55Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:47:56Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:47:57Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:47:59Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:48:00Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:48:01Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:48:02Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:48:03Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:48:04Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:48:05Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:48:06Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:48:07Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:48:08Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:48:10Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:48:11Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:48:12Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:48:13Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:48:14Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:48:16Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:48:18Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:48:19Z",
                "machine_status": 1,
                "vibration": 716
            },
            {
                "ts": "2024-01-21T15:48:20Z",
                "machine_status": 1,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:48:22Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:48:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:25Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:48:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:48:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:48:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:37Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:48:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:48:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:48:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:48:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:48:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:48:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:48:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:52Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:48:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:48:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:48:57Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:48:58Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:48:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:49:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:49:02Z",
                "machine_status": 0,
                "vibration": 809
            },
            {
                "ts": "2024-01-21T15:49:03Z",
                "machine_status": 1,
                "vibration": 600
            },
            {
                "ts": "2024-01-21T15:49:04Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T15:49:05Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:49:06Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T15:49:07Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T15:49:08Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T15:49:09Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:49:10Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:49:11Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:49:12Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:49:13Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:49:14Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:49:15Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:49:18Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:49:19Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:49:20Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:49:21Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:49:22Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:49:23Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:49:25Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:49:26Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:49:27Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:49:28Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:49:29Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:49:30Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:49:31Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:49:32Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:49:33Z",
                "machine_status": 1,
                "vibration": 665
            },
            {
                "ts": "2024-01-21T15:49:35Z",
                "machine_status": 0,
                "vibration": 665
            },
            {
                "ts": "2024-01-21T15:49:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:49:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:39Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:49:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:49:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:49:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:49:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:49:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:49:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:49:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:49:51Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T15:49:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:49:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:49:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:49:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:13Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:50:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:43Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:50:45Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:50:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:50:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:50:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:50:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:50:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:50:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:31Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:51:32Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:51:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:51:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:51:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:51:51Z",
                "machine_status": 1,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:51:52Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T15:51:53Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:51:54Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T15:51:55Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T15:51:56Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:51:58Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:51:59Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:52:00Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:52:01Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:52:02Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T15:52:03Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:52:04Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:52:08Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:52:09Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:52:10Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:52:11Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T15:52:12Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:52:13Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:52:14Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:52:15Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:52:16Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:52:17Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:52:18Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T15:52:19Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:52:20Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:52:21Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T15:52:22Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:52:23Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T15:52:24Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:52:25Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T15:52:26Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:52:27Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:52:28Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:52:29Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:52:30Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T15:52:31Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T15:52:32Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:52:33Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T15:52:34Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:52:35Z",
                "machine_status": 1,
                "vibration": 77
            },
            {
                "ts": "2024-01-21T15:52:37Z",
                "machine_status": 1,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:52:38Z",
                "machine_status": 1,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:52:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:52:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:52:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:52:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:52:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:52:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:52:58Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:52:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:22Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:53:23Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:53:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:40Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:53:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:53:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:53:54Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:53:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:53:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:53:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:54:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:54:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:54:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:54:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:54:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:54:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:54:23Z",
                "machine_status": 0,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T15:54:24Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:54:25Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:54:27Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T15:54:28Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:54:29Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:54:30Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T15:54:31Z",
                "machine_status": 1,
                "vibration": 598
            },
            {
                "ts": "2024-01-21T15:54:32Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T15:54:33Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T15:54:34Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:54:35Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T15:54:36Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T15:54:37Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:54:38Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:54:39Z",
                "machine_status": 1,
                "vibration": 583
            },
            {
                "ts": "2024-01-21T15:54:40Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:54:41Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T15:54:42Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:54:43Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:54:44Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T15:54:45Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T15:54:46Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:54:48Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T15:54:49Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:54:50Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T15:54:51Z",
                "machine_status": 1,
                "vibration": 591
            },
            {
                "ts": "2024-01-21T15:54:52Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T15:54:53Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:54:54Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T15:54:56Z",
                "machine_status": 1,
                "vibration": 609
            },
            {
                "ts": "2024-01-21T15:54:57Z",
                "machine_status": 0,
                "vibration": -10
            },
            {
                "ts": "2024-01-21T15:54:59Z",
                "machine_status": 0,
                "vibration": -10
            },
            {
                "ts": "2024-01-21T15:55:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:55:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:26Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:55:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:55:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:55:54Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:55:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:55:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:55:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:08Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:56:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:18Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:29Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:30Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:31Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:32Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:56:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:56:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:56:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:56:58Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:56:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:57:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:57:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:57:04Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:57:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:57:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:57:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:57:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:57:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:57:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:57:27Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:57:28Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:57:32Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T15:57:33Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:57:34Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:57:35Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:57:36Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T15:57:37Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:57:38Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:57:39Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:57:40Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:57:41Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:57:43Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T15:57:44Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:57:45Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T15:57:46Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T15:57:47Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T15:57:48Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:57:49Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T15:57:51Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T15:57:52Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T15:57:53Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:57:54Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:57:55Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:57:56Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:57:57Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:57:58Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T15:58:00Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:58:01Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T15:58:02Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T15:58:03Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:58:04Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T15:58:05Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:58:06Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:58:07Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:58:08Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T15:58:09Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T15:58:10Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T15:58:11Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T15:58:12Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T15:58:13Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T15:58:14Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T15:58:15Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:58:16Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T15:58:17Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T15:58:18Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T15:58:20Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:58:21Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T15:58:22Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T15:58:23Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T15:58:24Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T15:58:26Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T15:58:27Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T15:58:28Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:58:29Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T15:58:30Z",
                "machine_status": 1,
                "vibration": 136
            },
            {
                "ts": "2024-01-21T15:58:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:40Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:58:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:58:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:58:45Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:58:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:58:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:58:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:58:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:51Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T15:58:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:58:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:58:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:03Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:08Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:14Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:18Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:23Z",
                "machine_status": 0,
                "vibration": -3
            },
            {
                "ts": "2024-01-21T15:59:24Z",
                "machine_status": 0,
                "vibration": -3
            },
            {
                "ts": "2024-01-21T15:59:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:32Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:33Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T15:59:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T15:59:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T15:59:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T15:59:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:00:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:00:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:00:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:00:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:00:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:00:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:00:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:00:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:00:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:00:09Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:00:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:00:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:00:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:00:13Z",
                "machine_status": 0,
                "vibration": -2
            },
            {
                "ts": "2024-01-21T16:00:14Z",
                "machine_status": 0,
                "vibration": -2
            },
            {
                "ts": "2024-01-21T16:00:15Z",
                "machine_status": 1,
                "vibration": 606
            },
            {
                "ts": "2024-01-21T16:00:16Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:00:17Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T16:00:18Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:00:19Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:00:20Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:00:22Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:00:23Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:00:24Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:00:25Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:00:26Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:00:28Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:00:29Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:00:30Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:00:31Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:00:32Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:00:33Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:00:34Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:00:35Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:00:36Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:00:37Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:00:38Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:00:39Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:00:40Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:00:41Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:00:42Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:00:43Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:00:44Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:00:45Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:00:46Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:00:47Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:00:48Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:00:49Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T16:00:50Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T16:00:51Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:00:52Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:00:53Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:00:54Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:00:55Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:00:56Z",
                "machine_status": 1,
                "vibration": 682
            },
            {
                "ts": "2024-01-21T16:00:57Z",
                "machine_status": 0,
                "vibration": 33
            },
            {
                "ts": "2024-01-21T16:00:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:13Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:20Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:24Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:01:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:01:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:44Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:01:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:01:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:01:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:01:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:01Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:04Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:09Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:02:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:02:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:02:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:02:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:03:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:05Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:03:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:19Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:03:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:26Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:03:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:35Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:03:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:03:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:03:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:03:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:03:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:18Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:04:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:04:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:04:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:04:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:05:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:05:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:05:05Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:05:51Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:05:52Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:05:53Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:05:56Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:05:57Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:05:59Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:06:00Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:06:01Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:06:02Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:06:03Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T16:06:04Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:06:05Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T16:06:06Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:06:07Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:06:08Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:06:09Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:06:10Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:06:11Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:06:12Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:06:13Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:06:14Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:06:15Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:06:16Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:06:17Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:06:18Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:06:20Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:06:21Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:06:22Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:06:23Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:06:24Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T16:06:25Z",
                "machine_status": 1,
                "vibration": 523
            },
            {
                "ts": "2024-01-21T16:06:26Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:06:27Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:06:28Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:06:29Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:06:30Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:06:31Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:06:32Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:06:33Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:06:34Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:06:35Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:06:36Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:06:37Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:06:38Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:06:39Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:06:40Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:06:41Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:06:42Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T16:06:43Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:06:44Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:06:45Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:06:46Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:06:47Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:06:51Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:06:52Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:06:53Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:06:54Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:06:55Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T16:06:56Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:06:57Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:06:58Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:06:59Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:07:00Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:07:02Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:07:03Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:07:04Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:07:06Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:07:08Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:07:09Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:07:10Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:07:11Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:07:12Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:07:13Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:07:14Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:07:15Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:07:16Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:07:17Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:07:18Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:07:19Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:07:20Z",
                "machine_status": 1,
                "vibration": 575
            },
            {
                "ts": "2024-01-21T16:07:21Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:07:22Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:07:23Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:07:24Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:07:25Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:07:26Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:07:27Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:07:28Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:07:30Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T16:07:31Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:07:32Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:07:33Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:07:34Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T16:07:35Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:07:36Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:07:37Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:07:39Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:07:41Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:07:42Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:07:43Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T16:07:44Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T16:07:45Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:07:46Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T16:07:47Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:07:48Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:07:49Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:07:50Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:07:51Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:07:52Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:07:53Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:07:54Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:07:55Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:07:56Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:07:57Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:07:58Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:07:59Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:08:00Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:08:01Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:08:02Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:08:03Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:08:04Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:08:05Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:08:07Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:08:08Z",
                "machine_status": 1,
                "vibration": 571
            },
            {
                "ts": "2024-01-21T16:08:09Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T16:08:10Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:08:11Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:08:12Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:08:13Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:08:14Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:08:16Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:08:17Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:08:18Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:08:19Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:08:20Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:08:21Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T16:08:22Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:08:26Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:08:27Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:08:28Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:08:29Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:08:30Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:08:32Z",
                "machine_status": 1,
                "vibration": 513
            },
            {
                "ts": "2024-01-21T16:08:33Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:08:34Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:08:35Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:08:36Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:08:37Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:08:38Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:08:39Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:08:40Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:08:42Z",
                "machine_status": 1,
                "vibration": 586
            },
            {
                "ts": "2024-01-21T16:08:43Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:08:45Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:08:46Z",
                "machine_status": 1,
                "vibration": 660
            },
            {
                "ts": "2024-01-21T16:08:47Z",
                "machine_status": 1,
                "vibration": 79
            },
            {
                "ts": "2024-01-21T16:08:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:08:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:08:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:08:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:08:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:08:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:08:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:08:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:08:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:08:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:08:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:01Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:03Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:09:04Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:06Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:09:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:08Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:13Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:27Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:09:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:40Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:09:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:09:43Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:09:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:09:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:09:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:09:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:18Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:27Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:29Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:30Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:10:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:10:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:10:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:56Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:10:58Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:10:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:11:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:11:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:11:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:11:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:11:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:21Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:29Z",
                "machine_status": 0,
                "vibration": -3
            },
            {
                "ts": "2024-01-21T16:12:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:12:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:54Z",
                "machine_status": 0,
                "vibration": -1
            },
            {
                "ts": "2024-01-21T16:12:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:12:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:12:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:13:29Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:13:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:13:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:13:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:13:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:13:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:13:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:13:58Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:13:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:14:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:14:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:14:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:14:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:14:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:05Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:15:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:15:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:30Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:15:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:15:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:55Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:15:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:15:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:15:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:02Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:16:03Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:16:04Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:16:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:38Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:16:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:43Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:16:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:16:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:16:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:17:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:36Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:17:37Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:17:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:40Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:17:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:17:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:17:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:17:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:14Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:18:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:35Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:18:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:18:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:18:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:18:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:18:57Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:18:58Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:19:00Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:19:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:06Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:19:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:20Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:22Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:19:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:19:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:19:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:19:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:19:59Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:20:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:21Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:38Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:20:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:20:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:20:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:20:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:20:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:01Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:21:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:26Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:21:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:45Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:21:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:21:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:21:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:21:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:05Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:22:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:22:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:20Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:22:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:44Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:22:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:22:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:22:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:02Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:23:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:23:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:23:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:23:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:23:57Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:23:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:23:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:24:08Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:24:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:24:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:24:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:24:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:24:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:24:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:07Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:25:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:13Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:25:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:25:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:25:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:25:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:25:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:25:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:25:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:25:57Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:25:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:26:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:26:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:26:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:10Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:26:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:23Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:26:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:33Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:26:34Z",
                "machine_status": 0,
                "vibration": -4
            },
            {
                "ts": "2024-01-21T16:26:36Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:26:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:26:48Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:26:49Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:26:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:26:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:26:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:27:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:27:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:27:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:27:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:27:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:27:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:27:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:27:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:27:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:27:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:27:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:27:13Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:27:14Z",
                "machine_status": 0,
                "vibration": 858
            },
            {
                "ts": "2024-01-21T16:27:16Z",
                "machine_status": 1,
                "vibration": 609
            },
            {
                "ts": "2024-01-21T16:27:17Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:27:18Z",
                "machine_status": 1,
                "vibration": 461
            },
            {
                "ts": "2024-01-21T16:27:19Z",
                "machine_status": 1,
                "vibration": 11
            },
            {
                "ts": "2024-01-21T16:27:20Z",
                "machine_status": 0,
                "vibration": 11
            },
            {
                "ts": "2024-01-21T16:27:21Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:27:22Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T16:27:24Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:27:25Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:27:27Z",
                "machine_status": 1,
                "vibration": 649
            },
            {
                "ts": "2024-01-21T16:27:28Z",
                "machine_status": 1,
                "vibration": 649
            },
            {
                "ts": "2024-01-21T16:27:29Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:27:30Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:27:31Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:27:32Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:27:34Z",
                "machine_status": 1,
                "vibration": 600
            },
            {
                "ts": "2024-01-21T16:27:35Z",
                "machine_status": 1,
                "vibration": 600
            },
            {
                "ts": "2024-01-21T16:27:36Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:27:37Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:27:39Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:27:40Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:27:41Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:27:43Z",
                "machine_status": 1,
                "vibration": 586
            },
            {
                "ts": "2024-01-21T16:27:44Z",
                "machine_status": 1,
                "vibration": 586
            },
            {
                "ts": "2024-01-21T16:27:45Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:27:46Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:27:47Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:27:48Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:27:49Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:27:50Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:27:52Z",
                "machine_status": 1,
                "vibration": 596
            },
            {
                "ts": "2024-01-21T16:27:53Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:27:55Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:27:57Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:27:58Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:27:59Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:28:00Z",
                "machine_status": 1,
                "vibration": 586
            },
            {
                "ts": "2024-01-21T16:28:01Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:28:02Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T16:28:03Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:28:04Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:28:05Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:28:06Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T16:28:07Z",
                "machine_status": 1,
                "vibration": 598
            },
            {
                "ts": "2024-01-21T16:28:08Z",
                "machine_status": 1,
                "vibration": 598
            },
            {
                "ts": "2024-01-21T16:28:09Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:28:10Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:28:11Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T16:28:13Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T16:28:14Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:28:15Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:28:16Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:28:17Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:28:18Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:28:19Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:28:20Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:28:21Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:28:22Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:28:23Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:28:24Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:28:25Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:28:26Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:28:27Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:28:28Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:28:29Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:28:31Z",
                "machine_status": 1,
                "vibration": 596
            },
            {
                "ts": "2024-01-21T16:28:32Z",
                "machine_status": 1,
                "vibration": 591
            },
            {
                "ts": "2024-01-21T16:28:33Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:28:34Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:28:35Z",
                "machine_status": 1,
                "vibration": 617
            },
            {
                "ts": "2024-01-21T16:28:37Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:28:38Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:28:40Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:28:41Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:28:42Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:28:43Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:28:44Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:28:45Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:28:46Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:28:48Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:28:49Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:28:50Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:28:51Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:28:52Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:28:53Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:28:54Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:28:55Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:28:56Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:28:57Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:28:58Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:28:59Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:29:00Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:29:02Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:29:03Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T16:29:05Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:29:07Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:29:08Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:29:09Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:29:10Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:29:11Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T16:29:12Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:29:13Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:29:14Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:29:15Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:29:16Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:29:17Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:29:18Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:29:19Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:29:22Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:29:23Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:29:24Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:29:25Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:29:26Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:29:27Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T16:29:28Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T16:29:29Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:29:32Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:29:34Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:29:36Z",
                "machine_status": 1,
                "vibration": 596
            },
            {
                "ts": "2024-01-21T16:29:37Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:29:38Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T16:29:39Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:29:41Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:29:42Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:29:44Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T16:29:45Z",
                "machine_status": 1,
                "vibration": 600
            },
            {
                "ts": "2024-01-21T16:29:47Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T16:29:48Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:29:50Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:29:51Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:29:52Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:29:54Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:29:55Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:29:56Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:29:58Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:29:59Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:30:01Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:30:02Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:30:03Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:30:06Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:30:07Z",
                "machine_status": 1,
                "vibration": 521
            },
            {
                "ts": "2024-01-21T16:30:08Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:30:09Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T16:30:11Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:30:12Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:30:14Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:30:15Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:30:16Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:30:17Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:30:20Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:30:21Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T16:30:22Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:30:23Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:30:24Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:30:26Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T16:30:27Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:30:28Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:30:29Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T16:30:30Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T16:30:31Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T16:30:32Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:30:35Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:30:36Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:30:37Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:30:38Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:30:39Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:30:40Z",
                "machine_status": 1,
                "vibration": 600
            },
            {
                "ts": "2024-01-21T16:30:41Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:30:42Z",
                "machine_status": 1,
                "vibration": 513
            },
            {
                "ts": "2024-01-21T16:30:43Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:30:44Z",
                "machine_status": 1,
                "vibration": 575
            },
            {
                "ts": "2024-01-21T16:30:45Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:30:48Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:30:49Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T16:30:50Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:30:51Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:30:52Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T16:30:53Z",
                "machine_status": 1,
                "vibration": 587
            },
            {
                "ts": "2024-01-21T16:30:54Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:30:55Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T16:30:56Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:30:57Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:30:58Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:30:59Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:31:01Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:31:02Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:31:03Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:31:04Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:31:05Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T16:31:06Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:31:10Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:31:11Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:31:12Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:31:14Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T16:31:21Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:31:24Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:31:25Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:31:29Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:31:30Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:31:32Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:31:33Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:31:34Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:31:36Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:31:37Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:31:39Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:31:40Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:31:41Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:31:42Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:31:47Z",
                "machine_status": 1,
                "vibration": 540
            },
            {
                "ts": "2024-01-21T16:31:48Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:31:49Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:31:51Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:31:52Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:31:55Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T16:31:56Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:31:57Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:31:58Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:31:59Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:32:00Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:32:01Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T16:32:02Z",
                "machine_status": 1,
                "vibration": 518
            },
            {
                "ts": "2024-01-21T16:32:03Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:32:04Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T16:32:06Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:32:07Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:32:08Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:32:10Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:32:11Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:32:12Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:32:14Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:32:15Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T16:32:16Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:32:17Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:32:18Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:32:19Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:32:20Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:32:21Z",
                "machine_status": 1,
                "vibration": 580
            },
            {
                "ts": "2024-01-21T16:32:22Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:32:23Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:32:24Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:32:25Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:32:26Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:32:27Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:32:28Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:32:29Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:32:30Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:32:31Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:32:32Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:32:33Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:32:34Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T16:32:35Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T16:32:36Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:32:38Z",
                "machine_status": 1,
                "vibration": 596
            },
            {
                "ts": "2024-01-21T16:32:40Z",
                "machine_status": 0,
                "vibration": 596
            },
            {
                "ts": "2024-01-21T16:32:41Z",
                "machine_status": 0,
                "vibration": 76
            },
            {
                "ts": "2024-01-21T16:32:42Z",
                "machine_status": 0,
                "vibration": -2
            },
            {
                "ts": "2024-01-21T16:32:43Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:32:44Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:32:45Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T16:32:46Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:32:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:32:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:32:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:32:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:32:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:32:52Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:32:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:32:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:32:55Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:32:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:32:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:33:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:43Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:33:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:49Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:33:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:33:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:33:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:34:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:34Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:34:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:34:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:34:56Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:34:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:16Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:35:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:35:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:35:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:35:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:35:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:35:57Z",
                "machine_status": 0,
                "vibration": 617
            },
            {
                "ts": "2024-01-21T16:35:58Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:36:00Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:36:01Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:36:02Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:36:03Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:36:04Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:36:05Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:36:06Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:36:07Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:36:08Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:36:09Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:36:10Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:36:12Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:36:13Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:36:14Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:36:15Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:36:16Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:36:17Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:36:18Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:36:19Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:36:23Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:36:24Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:36:25Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:36:26Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:36:28Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:36:29Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:36:31Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:36:33Z",
                "machine_status": 1,
                "vibration": 516
            },
            {
                "ts": "2024-01-21T16:36:34Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:36:35Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:36:37Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:36:38Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:36:39Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:36:42Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:36:43Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:36:44Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:36:45Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:36:46Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:36:47Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:36:48Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T16:36:51Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:36:52Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:36:56Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:36:58Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:36:59Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:37:00Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:37:01Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:37:02Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:37:03Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:37:04Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:37:05Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:37:06Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:37:07Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:37:08Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:37:09Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:37:10Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:37:11Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:37:12Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:37:13Z",
                "machine_status": 1,
                "vibration": 576
            },
            {
                "ts": "2024-01-21T16:37:14Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:37:15Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:37:16Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:37:17Z",
                "machine_status": 1,
                "vibration": 669
            },
            {
                "ts": "2024-01-21T16:38:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:02Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:03Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:06Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:07Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:08Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:29Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:38Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:38:39Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:40Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:41Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T16:38:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:45Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:38:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:51Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:52Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:38:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:38:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:38:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:05Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T16:39:06Z",
                "machine_status": 0,
                "vibration": 20
            },
            {
                "ts": "2024-01-21T16:39:07Z",
                "machine_status": 0,
                "vibration": -10
            },
            {
                "ts": "2024-01-21T16:39:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:15Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:39:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:17Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:23Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:30Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:32Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:33Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:39:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:39:35Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:39:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:39:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:39:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:39:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:12Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:21Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:40:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:40:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:40:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:40:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:40:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:04Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:05Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:09Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:21Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:41:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:40Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:41:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:47Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:48Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:41:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:41:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:41:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:42:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:42:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:42:02Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:42:03Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:42:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:42:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:42:06Z",
                "machine_status": 0,
                "vibration": 4
            },
            {
                "ts": "2024-01-21T16:42:07Z",
                "machine_status": 0,
                "vibration": 4
            },
            {
                "ts": "2024-01-21T16:42:08Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:42:09Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:42:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:42:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:42:13Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:42:14Z",
                "machine_status": 1,
                "vibration": 588
            },
            {
                "ts": "2024-01-21T16:42:15Z",
                "machine_status": 0,
                "vibration": 47
            },
            {
                "ts": "2024-01-21T16:42:16Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T16:42:18Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:42:20Z",
                "machine_status": 1,
                "vibration": 511
            },
            {
                "ts": "2024-01-21T16:42:21Z",
                "machine_status": 1,
                "vibration": 511
            },
            {
                "ts": "2024-01-21T16:42:23Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:42:24Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:42:25Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:42:26Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:42:27Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:42:28Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:42:29Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:42:30Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:42:31Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:42:32Z",
                "machine_status": 1,
                "vibration": 516
            },
            {
                "ts": "2024-01-21T16:42:33Z",
                "machine_status": 1,
                "vibration": 516
            },
            {
                "ts": "2024-01-21T16:42:34Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:42:35Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:42:36Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:42:37Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:42:38Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:42:39Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:42:40Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:42:41Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T16:42:42Z",
                "machine_status": 1,
                "vibration": 568
            },
            {
                "ts": "2024-01-21T16:42:43Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:42:44Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:42:46Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:42:47Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:42:48Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:42:49Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:42:50Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T16:42:51Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:42:52Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T16:42:53Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:42:54Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:42:55Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:42:57Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:42:58Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:42:59Z",
                "machine_status": 0,
                "vibration": 23
            },
            {
                "ts": "2024-01-21T16:43:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:15Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:16Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:19Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:22Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:25Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:26Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:37Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:38Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:39Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:42Z",
                "machine_status": 0,
                "vibration": 31
            },
            {
                "ts": "2024-01-21T16:43:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:46Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:43:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:48Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:49Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:51Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:52Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:43:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:43:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:43:58Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:43:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:44:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:44:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:28Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:33Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:34Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:44:35Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:44:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:39Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:41Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:44:43Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:44:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:44:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:44:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:45:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:45:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:45:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:45:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:45:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:45:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:45:46Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:45:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:45:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:45:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:45:53Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:45:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:45:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:46:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:46:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:46:02Z",
                "machine_status": 0,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:46:04Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:46:05Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:46:06Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:46:08Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:46:09Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:46:11Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:46:12Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:46:14Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:46:16Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:46:17Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:46:18Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:46:19Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:46:20Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:46:21Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:46:22Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:46:23Z",
                "machine_status": 1,
                "vibration": 514
            },
            {
                "ts": "2024-01-21T16:46:24Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:46:25Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:46:26Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:46:27Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:46:28Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:46:31Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T16:46:33Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:46:34Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:46:36Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:46:38Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:46:39Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:46:40Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:46:41Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:46:43Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:46:44Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:46:45Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:46:46Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:46:47Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:46:48Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:46:49Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:46:50Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:46:51Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:46:54Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:46:55Z",
                "machine_status": 1,
                "vibration": 553
            },
            {
                "ts": "2024-01-21T16:46:56Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:46:57Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:46:59Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:47:00Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:47:01Z",
                "machine_status": 1,
                "vibration": 548
            },
            {
                "ts": "2024-01-21T16:47:02Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T16:47:04Z",
                "machine_status": 1,
                "vibration": 574
            },
            {
                "ts": "2024-01-21T16:47:06Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:47:07Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:47:08Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:47:09Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:47:12Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:47:13Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T16:47:14Z",
                "machine_status": 1,
                "vibration": 573
            },
            {
                "ts": "2024-01-21T16:47:15Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:47:16Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:47:17Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:47:18Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T16:47:19Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:47:20Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:47:21Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:47:23Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T16:47:24Z",
                "machine_status": 1,
                "vibration": 525
            },
            {
                "ts": "2024-01-21T16:47:25Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:47:26Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:47:27Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:47:29Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:47:30Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:47:32Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:47:33Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:47:34Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:47:35Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:47:36Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:47:37Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:47:38Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:47:40Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:47:41Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:47:42Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:47:43Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:47:44Z",
                "machine_status": 1,
                "vibration": 531
            },
            {
                "ts": "2024-01-21T16:47:45Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:47:46Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:47:47Z",
                "machine_status": 1,
                "vibration": 561
            },
            {
                "ts": "2024-01-21T16:47:48Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:47:49Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:47:50Z",
                "machine_status": 1,
                "vibration": 547
            },
            {
                "ts": "2024-01-21T16:47:51Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:47:52Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:47:53Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:47:55Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:47:56Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:47:57Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:47:59Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:48:00Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:48:01Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:48:02Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:48:03Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:48:04Z",
                "machine_status": 1,
                "vibration": 532
            },
            {
                "ts": "2024-01-21T16:48:05Z",
                "machine_status": 1,
                "vibration": 530
            },
            {
                "ts": "2024-01-21T16:48:06Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:48:07Z",
                "machine_status": 1,
                "vibration": 585
            },
            {
                "ts": "2024-01-21T16:48:08Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:48:09Z",
                "machine_status": 1,
                "vibration": 522
            },
            {
                "ts": "2024-01-21T16:48:10Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:48:11Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:48:12Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:48:13Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:48:14Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:48:15Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:48:16Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:48:17Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:48:18Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:48:19Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:48:20Z",
                "machine_status": 1,
                "vibration": 582
            },
            {
                "ts": "2024-01-21T16:48:21Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:48:22Z",
                "machine_status": 1,
                "vibration": 546
            },
            {
                "ts": "2024-01-21T16:48:23Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:48:24Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:48:25Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T16:48:26Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:48:27Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:48:29Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:48:30Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:48:31Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:48:32Z",
                "machine_status": 1,
                "vibration": 585
            },
            {
                "ts": "2024-01-21T16:48:33Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:48:42Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:48:43Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T16:48:44Z",
                "machine_status": 1,
                "vibration": 524
            },
            {
                "ts": "2024-01-21T16:48:45Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:48:46Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:48:47Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:48:48Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:49:32Z",
                "machine_status": 1,
                "vibration": 527
            },
            {
                "ts": "2024-01-21T16:49:33Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:49:34Z",
                "machine_status": 1,
                "vibration": 567
            },
            {
                "ts": "2024-01-21T16:49:36Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:49:43Z",
                "machine_status": 1,
                "vibration": 572
            },
            {
                "ts": "2024-01-21T16:49:46Z",
                "machine_status": 1,
                "vibration": 571
            },
            {
                "ts": "2024-01-21T16:49:47Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:49:48Z",
                "machine_status": 1,
                "vibration": 555
            },
            {
                "ts": "2024-01-21T16:49:50Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:49:51Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:49:52Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:49:53Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:49:54Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:49:55Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:49:56Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:49:58Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:49:59Z",
                "machine_status": 1,
                "vibration": 545
            },
            {
                "ts": "2024-01-21T16:50:00Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:50:01Z",
                "machine_status": 1,
                "vibration": 551
            },
            {
                "ts": "2024-01-21T16:50:03Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:50:04Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:50:05Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:50:07Z",
                "machine_status": 1,
                "vibration": 537
            },
            {
                "ts": "2024-01-21T16:50:08Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:50:09Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:50:10Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:50:11Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:50:12Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:50:13Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:50:15Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:50:17Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:50:18Z",
                "machine_status": 1,
                "vibration": 521
            },
            {
                "ts": "2024-01-21T16:50:20Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:50:21Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:50:22Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:50:23Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:50:24Z",
                "machine_status": 1,
                "vibration": 528
            },
            {
                "ts": "2024-01-21T16:50:25Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:50:26Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:50:27Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:50:28Z",
                "machine_status": 1,
                "vibration": 701
            },
            {
                "ts": "2024-01-21T16:50:29Z",
                "machine_status": 1,
                "vibration": 701
            },
            {
                "ts": "2024-01-21T16:50:30Z",
                "machine_status": 1,
                "vibration": 701
            },
            {
                "ts": "2024-01-21T16:50:31Z",
                "machine_status": 0,
                "vibration": 61
            },
            {
                "ts": "2024-01-21T16:50:32Z",
                "machine_status": 0,
                "vibration": 18
            },
            {
                "ts": "2024-01-21T16:50:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:40Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:42Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:44Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:50:45Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:47Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:48Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:50:50Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:50:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:55Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:50:57Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:50:58Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:50:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:00Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:08Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:10Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:11Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:51:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:19Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:51:20Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:51:22Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:23Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:26Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:51:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:51:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:51:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:34Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:41Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:43Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:51:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:51:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:51:48Z",
                "machine_status": 1,
                "vibration": 624
            },
            {
                "ts": "2024-01-21T16:51:49Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:51:51Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:51:52Z",
                "machine_status": 1,
                "vibration": 581
            },
            {
                "ts": "2024-01-21T16:51:53Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:51:54Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:51:55Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:51:56Z",
                "machine_status": 1,
                "vibration": 585
            },
            {
                "ts": "2024-01-21T16:51:57Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:51:58Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:51:59Z",
                "machine_status": 1,
                "vibration": 517
            },
            {
                "ts": "2024-01-21T16:52:00Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:52:01Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:52:03Z",
                "machine_status": 1,
                "vibration": 554
            },
            {
                "ts": "2024-01-21T16:52:04Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:52:05Z",
                "machine_status": 1,
                "vibration": 583
            },
            {
                "ts": "2024-01-21T16:52:06Z",
                "machine_status": 1,
                "vibration": 529
            },
            {
                "ts": "2024-01-21T16:52:10Z",
                "machine_status": 1,
                "vibration": 606
            },
            {
                "ts": "2024-01-21T16:52:11Z",
                "machine_status": 1,
                "vibration": 550
            },
            {
                "ts": "2024-01-21T16:52:12Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:52:13Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T16:52:14Z",
                "machine_status": 1,
                "vibration": 564
            },
            {
                "ts": "2024-01-21T16:52:15Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:52:17Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:52:18Z",
                "machine_status": 1,
                "vibration": 597
            },
            {
                "ts": "2024-01-21T16:52:19Z",
                "machine_status": 1,
                "vibration": 520
            },
            {
                "ts": "2024-01-21T16:52:20Z",
                "machine_status": 1,
                "vibration": 594
            },
            {
                "ts": "2024-01-21T16:52:22Z",
                "machine_status": 1,
                "vibration": 231
            },
            {
                "ts": "2024-01-21T16:52:23Z",
                "machine_status": 0,
                "vibration": 9
            },
            {
                "ts": "2024-01-21T16:52:24Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:27Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:28Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:30Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:32Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:52:34Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:52:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:42Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:43Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:52:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:46Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:47Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:50Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:52Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:52:54Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:55Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:52:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:52:59Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:53:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:53:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:53:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:53:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:53:04Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:53:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:53:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:53:08Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:53:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:53:10Z",
                "machine_status": 1,
                "vibration": 605
            },
            {
                "ts": "2024-01-21T16:53:12Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:53:13Z",
                "machine_status": 1,
                "vibration": 584
            },
            {
                "ts": "2024-01-21T16:53:14Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:53:15Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:53:16Z",
                "machine_status": 1,
                "vibration": 606
            },
            {
                "ts": "2024-01-21T16:53:17Z",
                "machine_status": 1,
                "vibration": 549
            },
            {
                "ts": "2024-01-21T16:53:18Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:53:19Z",
                "machine_status": 1,
                "vibration": 570
            },
            {
                "ts": "2024-01-21T16:53:20Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T16:53:21Z",
                "machine_status": 1,
                "vibration": 579
            },
            {
                "ts": "2024-01-21T16:53:22Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:53:23Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:53:24Z",
                "machine_status": 1,
                "vibration": 577
            },
            {
                "ts": "2024-01-21T16:53:25Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:53:26Z",
                "machine_status": 1,
                "vibration": 526
            },
            {
                "ts": "2024-01-21T16:53:27Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:53:28Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:53:29Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:53:30Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:53:32Z",
                "machine_status": 1,
                "vibration": 593
            },
            {
                "ts": "2024-01-21T16:53:33Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:53:34Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:53:36Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:53:39Z",
                "machine_status": 1,
                "vibration": 536
            },
            {
                "ts": "2024-01-21T16:53:43Z",
                "machine_status": 1,
                "vibration": 538
            },
            {
                "ts": "2024-01-21T16:53:45Z",
                "machine_status": 1,
                "vibration": 589
            },
            {
                "ts": "2024-01-21T16:53:46Z",
                "machine_status": 1,
                "vibration": 557
            },
            {
                "ts": "2024-01-21T16:53:47Z",
                "machine_status": 1,
                "vibration": 535
            },
            {
                "ts": "2024-01-21T16:53:48Z",
                "machine_status": 1,
                "vibration": 590
            },
            {
                "ts": "2024-01-21T16:53:49Z",
                "machine_status": 1,
                "vibration": 591
            },
            {
                "ts": "2024-01-21T16:53:51Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:53:53Z",
                "machine_status": 1,
                "vibration": 565
            },
            {
                "ts": "2024-01-21T16:53:54Z",
                "machine_status": 1,
                "vibration": 569
            },
            {
                "ts": "2024-01-21T16:53:56Z",
                "machine_status": 1,
                "vibration": 165
            },
            {
                "ts": "2024-01-21T16:53:58Z",
                "machine_status": 1,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:03Z",
                "machine_status": 1,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:06Z",
                "machine_status": 1,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:07Z",
                "machine_status": 1,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:12Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:54:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:21Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:24Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:54:25Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:54:26Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:54:27Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:54:29Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:31Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:32Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:35Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:36Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:37Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:38Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:41Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:54:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:54:52Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:54:53Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:54:54Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:54:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:06Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:07Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:09Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:19Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:20Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:22Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:23Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:24Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:25Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:26Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:27Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:29Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:30Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:31Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:35Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:41Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:43Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:49Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:55:50Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:53Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:55:55Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:56Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:55:59Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:56:00Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:56:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:07Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:10Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:11Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:12Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:13Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:14Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:15Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:20Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:21Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:22Z",
                "machine_status": 0,
                "vibration": 0
            },
            {
                "ts": "2024-01-21T16:56:23Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:56:24Z",
                "machine_status": 1,
                "vibration": 544
            },
            {
                "ts": "2024-01-21T16:56:25Z",
                "machine_status": 1,
                "vibration": 560
            },
            {
                "ts": "2024-01-21T16:56:26Z",
                "machine_status": 1,
                "vibration": 534
            },
            {
                "ts": "2024-01-21T16:56:27Z",
                "machine_status": 1,
                "vibration": 533
            },
            {
                "ts": "2024-01-21T16:56:28Z",
                "machine_status": 1,
                "vibration": 562
            },
            {
                "ts": "2024-01-21T16:56:29Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:56:30Z",
                "machine_status": 1,
                "vibration": 558
            },
            {
                "ts": "2024-01-21T16:56:31Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:56:32Z",
                "machine_status": 1,
                "vibration": 552
            },
            {
                "ts": "2024-01-21T16:56:33Z",
                "machine_status": 1,
                "vibration": 578
            },
            {
                "ts": "2024-01-21T16:56:34Z",
                "machine_status": 1,
                "vibration": 556
            },
            {
                "ts": "2024-01-21T16:56:35Z",
                "machine_status": 1,
                "vibration": 542
            },
            {
                "ts": "2024-01-21T16:56:36Z",
                "machine_status": 1,
                "vibration": 541
            },
            {
                "ts": "2024-01-21T16:56:37Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:56:38Z",
                "machine_status": 1,
                "vibration": 566
            },
            {
                "ts": "2024-01-21T16:56:39Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:56:40Z",
                "machine_status": 1,
                "vibration": 559
            },
            {
                "ts": "2024-01-21T16:56:41Z",
                "machine_status": 1,
                "vibration": 539
            },
            {
                "ts": "2024-01-21T16:56:42Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:56:43Z",
                "machine_status": 1,
                "vibration": 543
            },
            {
                "ts": "2024-01-21T16:56:44Z",
                "machine_status": 1,
                "vibration": 563
            },
            {
                "ts": "2024-01-21T16:56:45Z",
                "machine_status": 1,
                "vibration": 300
            },
            {
                "ts": "2024-01-21T16:56:47Z",
                "machine_status": 1,
                "vibration": 300
            },
            {
                "ts": "2024-01-21T16:56:48Z",
                "machine_status": 0,
                "vibration": 24
            },
            {
                "ts": "2024-01-21T16:56:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:56:52Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:56:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:56:54Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:56:56Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:56:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:56:59Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:57:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:01Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:02Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:03Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:04Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:05Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:57:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:10Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:57:11Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:57:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:13Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:14Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:15Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:16Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:18Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:19Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:24Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:57:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:28Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:57:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:30Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:31Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:57:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:36Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:37Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:38Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:57:43Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:44Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:46Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:49Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:51Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:52Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:53Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:54Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:57:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:57Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:58Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:57:59Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:01Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:03Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:04Z",
                "machine_status": 0,
                "vibration": -5
            },
            {
                "ts": "2024-01-21T16:58:05Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:06Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:11Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:12Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:13Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:58:16Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:58:17Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:25Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:27Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:31Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:58:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:36Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:37Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:38Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:58:39Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:40Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:42Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:58:43Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:58:44Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:46Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:47Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:48Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:50Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:58:51Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:58:53Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:58:54Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:58:55Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:58:56Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:00Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:01Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:59:02Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:05Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:06Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:08Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:09Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:10Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:13Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:59:14Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:59:17Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:18Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:19Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:21Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:22Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:24Z",
                "machine_status": 0,
                "vibration": -6
            },
            {
                "ts": "2024-01-21T16:59:26Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:27Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:28Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:59:29Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:32Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:33Z",
                "machine_status": 0,
                "vibration": -7
            },
            {
                "ts": "2024-01-21T16:59:34Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:35Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:38Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:40Z",
                "machine_status": 0,
                "vibration": -9
            },
            {
                "ts": "2024-01-21T16:59:42Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:45Z",
                "machine_status": 0,
                "vibration": -8
            },
            {
                "ts": "2024-01-21T16:59:50Z",
                "machine_status": 0,
                "vibration": -9
            }
        ];

    return (
        <div className="app-container">
            <Header />
            <div className="content">
                <RealTimeData
                    timestamp={realTimeData.timestamp}
                    machineStatus={realTimeData.machineStatus}
                    vibration={realTimeData.vibration}
                />
                <HistoricalDataTable data={historicalData} />
            </div>
        </div>
    );
};

export default App;
