export const calculateObservedContrast = (buildingEffect, sensorEffect) =>
  Number((buildingEffect + sensorEffect).toFixed(10));

(() => {
  if (typeof document === "undefined") return;
  const format = (value) => {
    const sign = value > 0 ? "+" : value < 0 ? "−" : "";
    return sign + Math.abs(value).toLocaleString("fr-FR", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    }) + " °C";
  };

  document.querySelectorAll("[data-measurement-lab]").forEach((lab) => {
    const building = lab.querySelector("[data-building-effect]");
    const sensor = lab.querySelector("[data-sensor-effect]");
    const status = lab.querySelector("[data-lab-status]");

    if (!building || !sensor || !status) return;

    const update = () => {
      const buildingEffect = Number(building.value);
      const sensorEffect = Number(sensor.value);
      const observed = calculateObservedContrast(buildingEffect, sensorEffect);
      lab.querySelectorAll("[data-building-value]").forEach((node) => { node.textContent = format(buildingEffect); });
      lab.querySelectorAll("[data-sensor-value]").forEach((node) => { node.textContent = format(sensorEffect); });
      lab.querySelectorAll("[data-observed-value]").forEach((node) => { node.textContent = format(observed); });
      status.textContent = Math.abs(observed + 0.5) < 0.001
        ? "Même signal observé que dans l'enquête : −0,5 °C. Pourtant, les deux contributions peuvent être différentes."
        : "Le signal observé change. Essayez plusieurs répartitions entre effet du bâtiment et effet du capteur.";
      lab.style.setProperty("--building-share", Math.min(100, Math.abs(buildingEffect) / 2 * 100) + "%");
      lab.style.setProperty("--sensor-share", Math.min(100, Math.abs(sensorEffect) / 2 * 100) + "%");
    };

    lab.querySelectorAll("input[type=range]").forEach((input) => input.addEventListener("input", update));
    lab.querySelectorAll("[data-preset]").forEach((button) => {
      button.addEventListener("click", () => {
        const [buildingPreset, sensorPreset] = button.dataset.preset.split(",").map(Number);
        building.value = buildingPreset;
        sensor.value = sensorPreset;
        update();
      });
    });
    update();
  });
})();