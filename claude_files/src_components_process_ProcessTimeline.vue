<template>
  <div class="process-journey">
    <!-- Header section -->
    <div class="journey-header">
      <h2 class="journey-title">Seamless Transformation</h2>
      <p class="journey-subtitle">Complex challenges, elegant solutions</p>
    </div>

    <!-- Process visualization -->
    <div class="journey-visualization">
      <!-- Connecting line with progress -->
      <div class="connection-line">
        <div class="progress-track"></div>
        <div class="progress-fill" :style="{ width: progressWidth }"></div>
      </div>

      <!-- Process steps -->
      <div class="step-circles">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="process-step"
          :class="{
            'active': activeStep === index,
            'completed': index < activeStep
          }"
          @click="selectStep(index)"
        >
          <!-- Circle design with WhatsApp-style border -->
          <div class="step-circle">
            <!-- Single indicator that changes from number to checkmark -->
            <div class="step-indicator">
              <template v-if="index < activeStep">
                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </template>
              <template v-else>
                {{ index + 1 }}
              </template>
            </div>

            <!-- Icon -->
            <div class="step-icon">
              <svg v-if="step.icon === 'chat'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>

              <svg v-else-if="step.icon === 'rocket'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>

              <svg v-else-if="step.icon === 'chart'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3v18h18"></path>
                <path d="m19 9-5 5-4-4-3 3"></path>
              </svg>
            </div>
          </div>

          <!-- Step information -->
          <div class="step-info">
            <h3 class="step-title">{{ step.title }}</h3>
            <div class="step-duration">{{ step.duration }}</div>
            <p class="step-description">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to action -->
    <div class="cta-container">
      <button class="cta-button" @click="$emit('action-click')">
        {{ ctaText }}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </button>
      <p class="cta-note">Simply extraordinary results, every time</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue';

// Type definitions
interface ProcessStep {
  title: string;
  icon: string;
  duration: string;
  description: string;
}

interface Props {
  steps?: ProcessStep[];
  initialActiveStep?: number;
  ctaText?: string;
}

// Props with defaults
const props = withDefaults(defineProps<Props>(), {
  initialActiveStep: 0,
  ctaText: 'Start Your Project',
  steps: () => [
    {
      title: 'Consultation & Planning',
      icon: 'chat',
      duration: '1-2 weeks',
      description: 'Vision meets expertise. Unlimited potential.'
    },
    {
      title: 'Implementation & Transition',
      icon: 'rocket',
      duration: '2-4 weeks',
      description: 'Precision without disruption. Excellence always.'
    },
    {
      title: 'Management & Growth',
      icon: 'chart',
      duration: 'Ongoing',
      description: 'Measurable results. Sustainable growth.'
    }
  ]
});

// Events
const emit = defineEmits(['step-change', 'action-click']);

// State
const activeStep = ref(props.initialActiveStep);
const progressWidth = ref('0%');
let rotationTimer: number | null = null;

// Select a step
const selectStep = (index: number): void => {
  activeStep.value = index;
  emit('step-change', index);
};

// Update progress indicator
const updateProgressWidth = (): void => {
  if (props.steps.length <= 1) return;

  const segments = props.steps.length - 1;
  const progression = 100 / segments;
  progressWidth.value = `${progression * activeStep.value}%`;
};

// Watch for active step changes
watch(activeStep, () => {
  updateProgressWidth();
});

// Setup auto-rotation
onMounted(() => {
  updateProgressWidth();

  if (props.steps.length > 1) {
    rotationTimer = window.setInterval(() => {
      activeStep.value = (activeStep.value + 1) % props.steps.length;
    }, 5000);
  }
});

// Clean up
onUnmounted(() => {
  if (rotationTimer !== null) {
    window.clearInterval(rotationTimer);
  }
});
</script>

<style lang="scss" scoped>
// Variables
$primary-color: #0085ff;
$primary-dark: #0066cc;
$primary-light: #e6f3ff;
$accent-color: #00c2ff;
$success-color: #36b37e;
$dark-text: #172b4d;
$medium-text: #5e6c84;
$light-text: #97a0af;
$white: #ffffff;
$transition-normal: all 0.3s ease;
$box-shadow-light: 0 8px 30px rgba(0, 133, 255, 0.12);
$box-shadow-medium: 0 10px 30px rgba(0, 133, 255, 0.2);

// Main container
.process-journey {
  max-width: 1140px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  color: $dark-text;
}

// Header section
.journey-header {
  text-align: center;
  margin-bottom: 4rem;
}

.journey-title {
  font-size: 2.75rem;
  font-weight: 700;
  background: linear-gradient(120deg, $primary-color, $accent-color);
  -webkit-background-clip: text;
  color: transparent;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
}

.journey-subtitle {
  font-size: 1.25rem;
  color: $medium-text;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

// Process visualization
.journey-visualization {
  position: relative;
  margin-bottom: 4rem;
  padding: 0 1rem;
}

// Connection line
.connection-line {
  position: absolute;
  top: 100px;
  left: 20%;
  width: 60%;
  height: 3px;
  z-index: 1;
}

.progress-track {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e0e7ff;
  border-radius: 4px;
}

.progress-fill {
  position: absolute;
  height: 100%;
  background: linear-gradient(to right, $primary-color, $accent-color);
  border-radius: 4px;
  transition: width 0.5s ease;

  &::after {
    content: '';
    position: absolute;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: $accent-color;
    right: -4px;
    top: -3px;
    box-shadow: 0 0 10px 2px rgba(0, 194, 255, 0.4);
  }
}

// Steps container
.step-circles {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 5;
  padding: 0 1rem;
  max-width: 900px;
  margin: 0 auto;
}

// Process step
.process-step {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.333%;
  max-width: 250px;
  position: relative;
  transition: $transition-normal;

  &:hover {
    transform: translateY(-10px);

    .step-circle {
      box-shadow: $box-shadow-medium;
    }
  }

  &.active {
    .step-circle {
      background: linear-gradient(135deg, $primary-color, $accent-color);

      .step-icon {
        color: $white;
      }
    }

    .step-indicator {
      background: $white;
      color: $primary-color;
    }

    .step-title {
      color: $primary-color;
    }
  }

  &.completed {
    .step-circle {
      background: $success-color;

      .step-icon {
        color: $white;
      }
    }

    .step-indicator {
      background: $white;
      color: $success-color;

      .check-icon {
        color: $success-color;
      }
    }
  }
}

// Circle with WhatsApp-style border
.step-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: $transition-normal;
  margin-bottom: 1.75rem;

  // WhatsApp-style outer border
  box-shadow:
    inset 0 0 0 8px rgba(255, 255, 255, 0.4),
    0 8px 30px rgba(0, 133, 255, 0.12);
}

// Single indicator that changes from number to checkmark
.step-indicator {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 36px;
  height: 36px;
  background: $primary-light;
  color: $primary-color;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  z-index: 10;
  transition: $transition-normal;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .check-icon {
    width: 22px;
    height: 22px;
  }
}

// Icon
.step-icon {
  color: $primary-color;
  transition: $transition-normal;

  svg {
    width: 60px;
    height: 60px;
  }
}

// Step information
.step-info {
  text-align: center;
  padding: 0 0.5rem;
  transition: $transition-normal;
}

.step-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: $dark-text;
  transition: $transition-normal;
}

.step-duration {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background-color: rgba(0, 133, 255, 0.08);
  color: $primary-color;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.step-description {
  color: $medium-text;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
}

// Call to action
.cta-container {
  text-align: center;
}

// Button
.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  background: linear-gradient(135deg, $primary-color, $primary-dark);
  color: $white;
  border: none;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: $transition-normal;
  box-shadow: 0 6px 16px rgba(0, 98, 204, 0.25);

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, $primary-dark, $primary-dark);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 98, 204, 0.3);

    svg {
      transform: translateX(4px);
    }
  }

  &:active {
    transform: translateY(-1px);
  }
}

.cta-note {
  margin-top: 1rem;
  color: $medium-text;
  font-size: 0.9rem;
}

// Responsive design
@media (max-width: 992px) {
  .journey-title {
    font-size: 2.25rem;
  }

  .step-circle {
    width: 180px;
    height: 180px;
  }

  .step-icon svg {
    width: 50px;
    height: 50px;
  }

  .connection-line {
    top: 90px;
  }
}

@media (max-width: 768px) {
  .step-circles {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .process-step {
    width: 100%;
    max-width: 280px;
    margin-bottom: 2.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .connection-line {
    display: none;
  }

  // Vertical connection for mobile
  .process-step:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 200px;
    left: 50%;
    height: 50px;
    width: 3px;
    background: linear-gradient(to bottom, $primary-color, rgba(0, 133, 255, 0.1));
    z-index: 1;
  }

  .journey-header {
    margin-bottom: 3rem;
  }
}

@media (max-width: 480px) {
  .journey-title {
    font-size: 2rem;
  }

  .journey-subtitle {
    font-size: 1.1rem;
  }

  .step-circle {
    width: 160px;
    height: 160px;
  }

  .step-icon svg {
    width: 45px;
    height: 45px;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }

  .process-step:not(:last-child)::after {
    top: 160px;
  }
}
</style>
