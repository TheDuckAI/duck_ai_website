---
title: 'DuckTrack: Accurate Computer Activity Tracking'
date: '2023-11-23'
tags: ['ducktrack', 'tracker', 'data']
draft: false
summary: Blog post for DuckTrack tracker.
---

Authors: [David Andrews](https://broyojo.com/), [Pranav Tadepalli](https://pranav.cc/), [Alexander Kranias](https://alexkranias.com/), [Katherine Huang](https://www.linkedin.com/in/katherine-huang-7a4156205/), [Aran Komatsuzaki](https://twitter.com/arankomatsuzaki)

## Summary

We released DuckTrack, multimodal computer interaction data collector

- High-accuracy tracking & playback
- Synced collection of mouse, keyboard, screen video & audio data
- Desktop app for major OSs.
- Available here: https://github.com/TheDuckAI/DuckTrack

## Table of contents

1. [Motivation](#motivation)
2. [Feature overview](#feature-overview)
3. [Demos and accuracy](#demos-and-accuracy)
4. [Comparisons with Existing Trackers](#comparisons-with-existing-trackers)
5. [Limitations](#limitations)
6. [Acknowledgment](#acknowledgment)
7. [Citation](#citation)

## Introduction <a name="motivation"></a>

A general computer agent should be able to take video screenshot, audio and keyboard / mouse as input and manipulate a computer seamlessly like how humans do. However, the existing powerful computer models often have limited coverage of input modalities. For example, GPT-4V lacks mouse support, which is a severe limitation on the range of tasks the model can be applied to, as most user interfaces rely on mouse input in some way, not to mention that there is no alternative to mouse when it comes to drawing and playing video games, for instance.

We develop DuckTrack to record various inputs accurately, so that computer agent can be properly trained on the collected data. We have conducted a number of tests to assess the spatiotemporal accuracy of our tracker.

## Feature Overview <a name="feature-overview"></a>

- Precise and accurate recording and playback of mouse and keyboard actions.
- Screen recordings with OBS.
- Pausing/resuming of recording to censor private information such as login credentials or credit card numbers.
- Written in Python and runs on all major operating systems as a regular desktop application.

## Demos and Accuracy <a name="demos-and-accuracy"></a>

The following tests were run on:

- M2 Pro MBP 14" running macOS Sonoma 14.0
- Intel i7-10510U System76 Lemur Pro 9 running PopOS! 22.10 (Ubuntu based) and Windows 10 22H2

Python 3.11.6 was used to build and run the software.

### Drawing task <a name="drawing-task"></a>

This task tests the spacial accuracy of the tracker, testing if it can redraw a specific drawing with high accuracy. This test was conducted on [sketch.io](https://sketch.io).

Here is a demo video of it redrawing over the ground truth (ground truth is red, playback is black).

[![Drawing Video](https://img.youtube.com/vi/OoNZAwXfka0/0.jpg)](https://youtu.be/OoNZAwXfka0?si=GsL9TOtEoEZ8V7vv)

For some more rigorous results, here is the redrawn image compared with the groundtruth for n=10 using RMSE and SSIM metrics:

#### - macOS:

RMSE: 0.0122 ± 0.00041
SSIM: 0.996 ± 0.00022

#### - Windows:

RMSE: 0.0152 ± 0.00028
SSIM: 0.994 ± 0.00024

#### - Linux:

RMSE: 0.0453 ± 0.00034
SSIM: 0.988 ± 0.00022

It can be hypothesized that the RMSE and SSIM results are not absolutely perfect as the the online drawing tool we used may not be completely accurate. But, for all intents and purposes, these results show that the tracker has very high and practically perfect spatial accuracy.

### ReCAPTCHA <a name="recaptcha"></a>

The ReCAPTCHA task is one where spacial and temporal accuracy are tested to see if they match human level. Despite ReCAPTCHA also looking at browser cookies to tell if you are a human, it also pays close attention to mouse movements. In other words, we can use ReCAPTCHA as a proxy for human-like movement which the eventual computer agent will have the ability to simulate.

For all 10 tests of ReCAPTCHA using the [ReCAPTCHA demo](https://www.google.com/recaptcha/api2/demo), we find that the tracker has a 100% success rate.

### Stopwatch Task <a name="stopwatch-task"></a>

In this task, we measure the temporal accuracy of the tracker and see what kind of delay is added when performing mouse clicks. We used this [online stopwatch](https://www.estopwatch.net/) for our tests.

Here's the groundtruth recording:
[![Stopwatch Video](https://img.youtube.com/vi/61HDSOajKWo/0.jpg)](https://youtu.be/61HDSOajKWo?si=-Qzc0S1NWzI3wf1L)

Results:

#### - macOS:

- Newly Introduced Error: 1.02 ms ± 0.43 ms
- Newly Introduced Error Frequency: 80%
- Distribution of Newly Introduced Errors:
  ![](https://hackmd.io/_uploads/H1T1ggizT.png)

#### - Windows:

- Newly Introduced Error: 0.03ms ± 0.39ms
- Newly Introduced Error Frequency: 25.38%
- Distribution of Newly Introduced Errors:
  ![](https://hackmd.io/_uploads/rkPosNjGT.png)

#### - Linux:

- Newly Introduced Error: 0.64 ms ± 0.58 ms
- Newly Introduced Error Frequency: 80.77%
- Distribution of Newly Introduced Errors:
  ![](https://hackmd.io/_uploads/BkbWlgofa.png)

Of course, the small amount of delay here may be error present in the online stopwatch we used, so the actual delay may be much less than this. Moreover, this delay could be caused by the operating system taking a small amount of time to process the mouse click event that we trigger, resulting in this amount of delay. In all likelihood, these inaccuracies are caused by a combination of these two factors.

## Comparisons with Existing Trackers <a name="comparisons-with-existing-trackers"></a>

Tests were conducted on Windows only.

### [MouseRecorder](https://github.com/eguller/MouseRecorder) <a name="mouserecorder"></a>

#### - Drawing Test:

- RMSE: 0.0162 ± 0.00041
- SSIM: 0.993 ± 0.00032

#### - Stopwatch Test:

- Newly Introduced Error: 4.98 ms ± 1.2 ms
- Newly Introduced Error Frequency: 75.71%
- Distribution of Newly Introduced Errors:
  ![](https://hackmd.io/_uploads/H1MyHUif6.png)

As can be seen here, the spatial accuracy of this tracker is about as good as ours, but the temporal accuracy is much worse.

### [MousePlayback](https://github.com/Stefangansevles/MousePlayback) <a name="mouseplayback"></a>

#### - Drawing Test:

N/A - Completely spatially inaccurate

#### - Stopwatch Test:

N/A - Could not conduct because of spatial inaccuracies. Events seem to play back in 1/4 the speed they were recorded in.

## Limitations <a name="limitations"></a>

### Hardware as a Confounding Factor <a name="hardware-as-a-confounding-factor"></a>

While these tests try to show the accuracy differences of the tool between operating systems, the hardware of the devices will come into play slightly. In this specific test, the M2 Macbook Pro 14 is significantly faster than the System76 laptop, making the tests slightly skewed towards macOS's favor. However, differences seen between Linux and Windows performance may provide some more meaningful results as the operating systems ran on the same laptop.

### Double Click and Triple Click <a name="double-click-and-triple-click"></a>

The app cannot simulate realistic double or triple clicks. Instead, we have to play a triple or double click event and then wait for the appropriate amount of time that the actual click sequence took. Due to this, we lose some accuracy in the playback, although the recording is as accurate as it can be. Future versions of the software could potentially fix this.

### Raw Input <a name="raw-input"></a>

Some applications use raw input, which bypasses the OS's way of handling mouse events in order to standardize things such as mouse acceleration and to get more precise mouse readings which is especially important for FPS games. However, the main input recording library we are using, pynput, does not read these events which are absorbed by raw input. So, for now, video games or other applications that use raw input will not be possible to record. This is an open issue and we have plans to address it by either updating our program with a new input capturing library or patching pynput to enable capturing mouse inputs even if raw input is used.

### Trackpad Tracking <a name="trackpad"></a>

Unfortunately, the program can't capture trackpad gestures and scrolling is not being captured correctly either. This latter issue is most likely due to pynput which can be fixed if we migrate to another library. However, capturing trackpad gestures would be a much more complex task.

### Delay <a name="delay"></a>

While we make sure that the events are played back with the correct timing, we cannot make sure that the operating system plays them back at the correct time, leading to a bit of uncertainty.

Another kind of delay that the program has is falling behind while playing events. The frequency and intensity that this happens varies across different operating systems seemingly, so here are some graphs of the delays seen while testing:

#### - macOS:

- Delay Duration: 0.03 ms ± 0.01 ms
- Delay Frequency: 0.09% ± 0.02%
  ![](https://hackmd.io/_uploads/rJRaOgofT.png)

#### - Windows:

- Delay Duration: 4.37 ms ± 1.58 ms
- Delay Frequency: 0.011% ± 0.004%
  ![](https://hackmd.io/_uploads/rklMIrofa.png)

#### - Linux:

- Delay Duration: 1.51 ms ± 0.04 ms
- Delay Frequency: 17.56% ± 0.5%
  ![](https://hackmd.io/_uploads/rkNKugszp.png)

### Video Synchronization <a name="video-synchronization"></a>

Additionally, OBS is not completely predictable when it starts to record its frames, and the program only know when it starts to record after it sends a message to the software, in a round trip fashion mind you. Despite this, we are sure that the uncertainty in our measurement of when OBS starts to record frames is within 10ms or so, well below the ~30ms range where it becomes worrying at 30fps.

### Other Notes <a name="other-notes"></a>

We found that using Python's `time.sleep()` was inaccurate and led to imprecision in delay times that varied across operating systems, as shown by these results:

#### - macOS:

![](https://hackmd.io/_uploads/HJDS2ksG6.png)

#### - Windows:

![](https://hackmd.io/_uploads/r10jxBofp.png)

#### - Linux:

![](https://hackmd.io/_uploads/SkyVhyoMp.png)

So, we decided to use a busy-wait sleep implementation instead which is highly accurate at the cost of more CPU usage.

Anyway, feel free to post any issues you experience with the software on the [Github](https://github.com/TheDuckAI/DuckTrack).

## Future Directions <a name="future-directions"></a>

We plan to fix major issues with the software, such as not being able to record events when an an application using raw input is in use. This could be accomplished by using [libuiohook](https://github.com/kwhat/libuiohook) which is seemingly able to capture raw input events on Windows, which accounts for 96.94% of Steam users. Using libuihook could effectively replace pynput for recording in the application. Since this library is written in C, interacting with it through Python should not be very difficult.

## Acknowledgment <a name="acknowledgment"></a>

We would like to thank Kshitij Gupta, Tom Sawada and Daniel Kaplan for their valuable feedback.

## Citation <a name="citation"></a>

```
@misc{ducktrack,
    author= {Andrews, David and Tadepalli, Pranav and Kranias, Alexander and Huang, Katherine and Komatsuzaki, Aran},
    title = {{DuckTrack: Accurate Computer Activity Tracking}},
    howpublished = {\url{https://duckai.org/blog/ducktrack}},
    year = 2023,
    month = November
}
```
