// main.js

// Initialize volume number/slider event listeners
(function () {

  let volumeNumber = document.querySelector('#volume-number');
  let volumeSlider = document.querySelector('#volume-slider');
  let hornAudio = document.querySelector('#horn-sound');
  let honkBtn = document.querySelector('#honk-btn');

  let setVolumeImage = function (volume) {
    let volumeImage = document.querySelector('#volume-image');
    if (volume > 66) {
      volumeImage.src = "./assets/media/icons/volume-level-3.svg";
      honkBtn.disabled = false;
    } else if (volume > 33) {
      volumeImage.src = "./assets/media/icons/volume-level-2.svg";
      honkBtn.disabled = false;
    } else if (volume > 0) {
      volumeImage.src = "./assets/media/icons/volume-level-1.svg";
      honkBtn.disabled = false;
    } else {
      volumeImage.src = "./assets/media/icons/volume-level-0.svg";
      honkBtn.disabled = true;
    }
  }

  volumeNumber.addEventListener('input', function (e) {
    let volume = e.target.value;
    if (volume > 100) {
      volume = 100;
      e.target.value = 100;
    } else if (volume < 0) {
      volume = 0;
      e.target.value = 0;
    }
    hornAudio.volume = volume / 100;
    volumeSlider.value = volume;
    setVolumeImage(volume);
  });

  volumeSlider.addEventListener('input', function (e) {
    let volume = e.target.value;
    hornAudio.volume = volume / 100;
    volumeNumber.value = volume;
    setVolumeImage(volume);
  });

})();

// Initialize audio selection event listeners
(function () {
  let radioAirHorn = document.querySelector('#radio-air-horn');
  let radioCarHorn = document.querySelector('#radio-car-horn');
  let radioPartyHorn = document.querySelector('#radio-party-horn');
  let hornAudio = document.querySelector('#horn-sound');
  let honkBtn = document.querySelector('#honk-btn');
  let partyHornForm = document.querySelector('#party-horn-form');

  radioAirHorn.addEventListener('input', function () {
    if (radioAirHorn.checked) {
      hornAudio.src = "./assets/media/audio/air-horn.mp3";
    }
  });

  radioCarHorn.addEventListener('input', function () {
    if (radioCarHorn.checked) {
      hornAudio.src = "./assets/media/audio/car-horn.mp3";
    }
  });

  radioPartyHorn.addEventListener('input', function () {
    if (radioPartyHorn.checked) {
      hornAudio.src = "./assets/media/audio/party-horn.mp3";
    }
  });

  partyHornForm.addEventListener('submit', function (e) {
    hornAudio.play();
    e.preventDefault();
  });
})();