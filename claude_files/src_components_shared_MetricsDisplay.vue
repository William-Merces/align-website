<template>
  <div class="metrics-display">
    <div
      class="metrics-row"
      :class="{ 'metrics-grid': layout === 'grid' }"
    >
      <div
        class="metric-card"
        v-for="(metric, index) in metrics"
        :key="index"
        :class="{ 'highlight': metric.highlight }"
        :style="{ animationDelay: index * 0.1 + 's' }"
      >
        <div class="metric-value">
          <span class="metric-counter" ref="metricCounters">{{ metric.value }}</span>
        </div>
        <div class="metric-label">{{ metric.label }}</div>
        <div class="metric-description">{{ metric.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

// Props
interface Metric {
  value: string | number;
  label: string;
  description: string;
  highlight?: boolean;
}

interface Props {
  metrics: Metric[];
  layout?: 'row' | 'grid';
  animateOnScroll?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  layout: 'grid',
  animateOnScroll: true
});

// Refs
const metricCounters = ref<HTMLElement[]>([]);

// Animação dos números
const animateNumbers = () => {
  props.metrics.forEach((metric, index) => {
    const element = metricCounters.value[index];
    if (!element) return;

    const finalValue = metric.value.toString();

    // Não animar strings que não são números simples
    if (isNaN(Number(finalValue))) {
      element.textContent = finalValue;
      return;
    }

    // Configuração da animação
    const duration = 2000; // 2 segundos
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    let frame = 0;
    const numValue = parseFloat(finalValue);

    // Animação em si
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentValue = Math.round(numValue * progress);

      element.textContent = currentValue.toString();

      if (frame === totalFrames) {
        clearInterval(counter);
        element.textContent = finalValue;
      }
    }, frameDuration);
  });
};

// Observer para animação ao scrollar
let observer: IntersectionObserver | null = null;

onMounted(() => {
  if (props.animateOnScroll) {
    observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateNumbers();
        observer?.disconnect();
      }
    }, { threshold: 0.3 });

    const metricsContainer = document.querySelector('.metrics-display');
    if (metricsContainer) {
      observer.observe(metricsContainer);
    }
  } else {
    // Se não tiver animação ao scroll, anima imediatamente
    animateNumbers();
  }
});

// Limpar observer quando componente é destruído
watch(() => props.metrics, () => {
  // Reset e reanima quando os dados mudam
  if (!props.animateOnScroll) {
    animateNumbers();
  }
}, { deep: true });
</script>

<style scoped>
.metrics-display {
  width: 100%;
}

.metrics-row {
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding: 0.5rem;
  scroll-snap-type: x mandatory;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  background-color: var(--bg-color);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.06);
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  overflow: hidden;
  border: 1px solid var(--border-color);
  animation: fadeInUp 0.5s ease forwards;
  opacity: 0;
  scroll-snap-align: start;
  min-width: 250px;
  flex: 1;

  &.highlight {
    border-color: var(--primary-color);
    box-shadow: 0 12px 24px rgba(0, 133, 255, 0.15);
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      var(--primary-color) 0%,
      var(--primary-dark) 100%
    );
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0, 0, 0, 0.1);

    &::before {
      transform: scaleX(1);
      transform-origin: left;
    }

    .metric-value {
      text-shadow: 0 0 15px rgba(0, 133, 255, 0.4);
    }
  }
}

.metric-value {
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.metric-label {
  font-size: 1.125rem;
  color: var(--text-color);
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.metric-description {
  font-size: 0.9375rem;
  color: var(--text-light);
  line-height: 1.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsividade */
@media (max-width: 992px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .metric-card {
    padding: 2rem 1.5rem;
  }

  .metric-value {
    font-size: 2.5rem;
  }
}

@media (max-width: 576px) {
  .metric-card {
    padding: 1.5rem 1.25rem;
  }

  .metric-value {
    font-size: 2rem;
  }

  .metric-label {
    font-size: 1rem;
  }
}
</style>
