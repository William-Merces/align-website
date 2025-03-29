<template>
  <div class="workflow-diagram">
    <div class="diagram-container">
      <div
        class="diagram-stage"
        v-for="(stage, index) in stages"
        :key="index"
      >
        <div
          class="stage-box"
          :class="{ active: activeStage === index }"
          @click="selectStage(index)"
        >
          <div class="stage-pulse" v-if="activeStage === index"></div>
          <div class="stage-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="stage.icon"
            ></svg>
          </div>
          <h4 class="stage-title">{{ stage.title }}</h4>
        </div>
        <div
          class="stage-connector"
          v-if="index < stages.length - 1"
        >
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            class="connector-arrow"
            :class="{ active: index < activeStage }"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              d="M5 12h14m-4 -4l4 4l-4 4"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <transition name="fade">
      <div class="stage-details" v-if="activeStage !== null">
        <div class="stage-details-header">
          <div class="stage-icon-large">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              v-html="stages[activeStage].icon"
            ></svg>
          </div>
          <h4>{{ stages[activeStage].title }}</h4>
        </div>
        <p>{{ stages[activeStage].description }}</p>
        <ul class="stage-checklist">
          <li
            v-for="(item, index) in stages[activeStage].checklist"
            :key="index"
            class="checklist-item"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="checklist-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </transition>

    <div class="workflow-cta" v-if="showCta">
      <button class="btn btn-primary" @click="$emit('action-click')">
        {{ ctaText }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue';

// Props
interface Stage {
  title: string;
  icon: string;
  description: string;
  checklist: string[];
}

interface Props {
  stages: Stage[];
  initialActiveStage?: number;
  showCta?: boolean;
  ctaText?: string;
  autoRotate?: boolean;
  rotateInterval?: number;
}

const props = withDefaults(defineProps<Props>(), {
  initialActiveStage: 0,
  showCta: true,
  ctaText: 'Fale com um especialista',
  autoRotate: true,
  rotateInterval: 6000
});

// Emits
const emit = defineEmits(['stage-change', 'action-click']);

// Estado interno
const activeStage = ref(props.initialActiveStage);
let rotationInterval: number | null = null;

// Função para selecionar um estágio
const selectStage = (index: number) => {
  activeStage.value = index;
  emit('stage-change', index);

  // Reinicia o intervalo quando o usuário clica
  if (props.autoRotate && rotationInterval) {
    clearInterval(rotationInterval);
    startAutoRotation();
  }
};

// Iniciar rotação automática
const startAutoRotation = () => {
  if (props.autoRotate) {
    rotationInterval = window.setInterval(() => {
      activeStage.value = (activeStage.value + 1) % props.stages.length;
      emit('stage-change', activeStage.value);
    }, props.rotateInterval);
  }
};

// Lifecycle hooks
onMounted(() => {
  startAutoRotation();
});

onBeforeUnmount(() => {
  if (rotationInterval) {
    clearInterval(rotationInterval);
  }
});

// Reiniciar intervalo quando mudam as props
watch(() => props.autoRotate, (newValue) => {
  if (rotationInterval) {
    clearInterval(rotationInterval);
    rotationInterval = null;
  }

  if (newValue) {
    startAutoRotation();
  }
});
</script>

<style scoped>
.workflow-diagram {
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(to bottom, var(--bg-color), var(--bg-light));
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--border-color);
}

.diagram-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 2.5rem;
  padding-bottom: 1.5rem;
  overflow-x: auto;
  padding: 0.5rem;
}

.diagram-stage {
  display: flex;
  align-items: center;
}

.stage-box {
  width: 120px;
  min-width: 120px;
  height: 120px;
  background-color: var(--bg-color);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--primary-color);

    .stage-icon {
      background-color: var(--primary-color);
      color: white;
    }
  }

  &.active {
    border-color: var(--primary-color);
    box-shadow: 0 15px 30px rgba(0, 133, 255, 0.2);
    transform: translateY(-8px) scale(1.05);

    .stage-icon {
      background-color: var(--primary-color);
      color: white;
      transform: scale(1.1);

      svg {
        transform: scale(1.1);
      }
    }

    .stage-title {
      color: var(--primary-color);
    }
  }
}

.stage-pulse {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    transparent 30%,
    rgba(0, 133, 255, 0.05) 70%
  );
  animation: pulse-animation 2s infinite;
  opacity: 0.8;
  z-index: 0;
}

.stage-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(0, 133, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  position: relative;
  z-index: 1;
  color: var(--primary-color);

  svg {
    width: 28px;
    height: 28px;
    transition: all 0.3s ease;
  }
}

.stage-title {
  font-size: 1rem;
  text-align: center;
  margin: 0;
  font-weight: 600;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
}

.stage-connector {
  width: 40px;
  min-width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: var(--text-light);
}

.connector-arrow {
  transition: all 0.3s ease;
  color: var(--text-light);

  &.active {
    color: var(--primary-color);
    animation: arrowPulse 1.5s infinite;
  }
}

.stage-details {
  background-color: var(--bg-color);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  border: 1px solid var(--border-color);

  .stage-details-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    h4 {
      font-size: 1.5rem;
      color: var(--text-color);
      margin: 0;
      background: linear-gradient(
        90deg,
        var(--text-color) 70%,
        var(--primary-color) 100%
      );
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
  }

  p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
}

.stage-icon-large {
  width: 60px;
  height: 60px;
  background: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 6px 12px rgba(0, 133, 255, 0.2);
  flex-shrink: 0;
}

.stage-checklist {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
}

.checklist-item {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.9375rem;
  animation: fadeInRight 0.5s ease forwards;
  opacity: 0;
  background-color: var(--bg-light);
  padding: 0.75rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  }
}

.checklist-icon {
  color: var(--primary-color);
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  margin-top: 0.125rem;
  background-color: rgba(0, 133, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    width: 16px;
    height: 16px;
  }
}

.workflow-cta {
  text-align: center;
  margin-top: 2rem;

  .btn-primary {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.875rem 2rem;
    font-size: 1.1rem;
    font-weight: 600;
    border-radius: 0.5rem;
    background-color: var(--primary-color);
    color: white;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 133, 255, 0.3);

    svg {
      transition: all 0.3s ease;
    }

    &:hover {
      background-color: var(--primary-dark);
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0, 133, 255, 0.4);

      svg {
        transform: translateX(5px);
      }
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 4px 8px rgba(0, 133, 255, 0.3);
    }
  }
}

/* Animações */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes pulse-animation {
  0% {
    transform: scale(0.95);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.3;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.7;
  }
}

@keyframes arrowPulse {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(3px);
  }
  100% {
    transform: translateX(0);
  }
}

/* Transições */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsividade */
@media (max-width: 992px) {
  .diagram-container {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .stage-connector {
    display: none;
  }

  .stage-checklist {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .workflow-diagram {
    padding: 1.5rem 1rem;
  }

  .stage-box {
    width: 100px;
    height: 100px;
    min-width: 100px;
  }

  .stage-icon {
    width: 50px;
    height: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }

  .stage-title {
    font-size: 0.875rem;
  }

  .stage-details {
    padding: 1.5rem;
  }

  .stage-details-header h4 {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .stage-box {
    width: 80px;
    height: 80px;
    min-width: 80px;
    padding: 0.75rem;
  }

  .stage-icon {
    width: 40px;
    height: 40px;
    margin-bottom: 0.5rem;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .stage-title {
    font-size: 0.75rem;
  }

  .stage-details {
    padding: 1.25rem;
  }

  .stage-icon-large {
    width: 50px;
    height: 50px;
  }
}
</style>
