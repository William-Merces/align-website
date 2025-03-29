<template>
  <div class="faq-accordion">
    <div v-if="showCategories" class="faq-categories">
      <button
        v-for="(category, index) in uniqueCategories"
        :key="index"
        class="category-button"
        :class="{ active: activeCategory === category.id }"
        @click="setActiveCategory(category.id)"
      >
        <span class="category-icon" v-if="category.icon" v-html="category.icon"></span>
        {{ category.name }}
        <span class="active-indicator"></span>
      </button>
    </div>

    <div class="faq-list">
      <div
        class="faq-item"
        v-for="(faq, index) in filteredFaqs"
        :key="index"
        :class="{ active: activeFaq === index }"
      >
        <div class="faq-question" @click="toggleFaq(index)">
          <h3>{{ faq.question }}</h3>
          <div class="faq-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" v-if="activeFaq !== index"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
        </div>
        <transition name="fade">
          <div class="faq-answer" v-if="activeFaq === index">
            <div class="answer-content">
              <p v-html="faq.answer"></p>
              <div class="faq-actions" v-if="faq.actions && faq.actions.length">
                <router-link
                  v-for="(action, actionIndex) in faq.actions"
                  :key="actionIndex"
                  :to="action.link"
                  class="btn"
                  :class="action.primary ? 'btn-primary' : 'btn-outline'"
                >
                  {{ action.text }}
                </router-link>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>

    <div v-if="showViewAll && hasMoreItems" class="faq-view-all">
      <button class="btn btn-text" @click="$emit('view-all')">
        Ver todas as perguntas
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

// Definição de tipos
interface FaqAction {
  text: string;
  link: string;
  primary?: boolean;
}

interface FaqItem {
  question: string;
  answer: string;
  category: string;
  actions?: FaqAction[];
}

interface CategoryItem {
  id: string;
  name: string;
  icon?: string;
}

interface Props {
  items: FaqItem[];
  categories?: CategoryItem[];
  initialCategory?: string;
  showCategories?: boolean;
  maxItems?: number;
  showViewAll?: boolean;
  initialOpenIndex?: number;
}

const props = withDefaults(defineProps<Props>(), {
  categories: () => [],
  initialCategory: '',
  showCategories: true,
  maxItems: 0,
  showViewAll: false,
  initialOpenIndex: -1
});

// Emits
const emit = defineEmits(['view-all', 'faq-opened', 'category-changed']);

// Estado
const activeFaq = ref(props.initialOpenIndex);
const activeCategory = ref(props.initialCategory);

// Computed properties
const uniqueCategories = computed<CategoryItem[]>(() => {
  if (props.categories.length) return props.categories;

  // Se não foram fornecidas categorias, extrair dos itens
  const categories = new Set<string>();
  props.items.forEach(item => categories.add(item.category));

  return Array.from(categories).map(cat => ({
    id: cat,
    name: cat.charAt(0).toUpperCase() + cat.slice(1),
    icon: undefined
  }));
});

const filteredFaqs = computed(() => {
  let result = props.items;

  // Filtrar por categoria se estiver selecionada
  if (activeCategory.value) {
    result = result.filter(faq => faq.category === activeCategory.value);
  }

  // Limitar número de itens se maxItems for maior que 0
  if (props.maxItems > 0) {
    result = result.slice(0, props.maxItems);
  }

  return result;
});

const hasMoreItems = computed(() => {
  if (props.maxItems <= 0) return false;

  const totalItems = activeCategory.value
    ? props.items.filter(faq => faq.category === activeCategory.value).length
    : props.items.length;

  return totalItems > props.maxItems;
});

// Métodos
const toggleFaq = (index: number) => {
  if (activeFaq.value === index) {
    activeFaq.value = -1;
  } else {
    activeFaq.value = index;
    emit('faq-opened', index, filteredFaqs.value[index]);
  }
};

const setActiveCategory = (categoryId: string) => {
  activeCategory.value = categoryId;
  activeFaq.value = -1;
  emit('category-changed', categoryId);
};

// Assistir mudanças nas props
watch(
  () => props.initialOpenIndex,
  (newVal) => {
    activeFaq.value = newVal;
  }
);

watch(
  () => props.initialCategory,
  (newVal) => {
    activeCategory.value = newVal;
  }
);
</script>

<style scoped>
.faq-accordion {
  max-width: 900px;
  margin: 0 auto;
}

/* Categorias */
.faq-categories {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.category-button {
  padding: 0.75rem 1.25rem;
  background-color: var(--bg-light);
  border: none;
  border-radius: 0.5rem;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 0.9375rem;
  color: var(--text-light);
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
}

.category-button .category-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.category-button .category-icon svg {
  color: var(--text-light);
  transition: all 0.3s ease;
}

.category-button .active-indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 3px;
  background: linear-gradient(
    90deg,
    var(--primary-color) 0%,
    var(--primary-dark) 100%
  );
  transition: width 0.3s ease;
  border-radius: 3px 3px 0 0;
}

.category-button:hover {
  background-color: #eee;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.category-button:hover .category-icon svg {
  color: var(--text-color);
}

.category-button:hover .active-indicator {
  width: 30%;
}

.category-button.active {
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 12px rgba(0, 133, 255, 0.2);
}

.category-button.active .category-icon svg {
  color: white;
}

.category-button.active .active-indicator {
  width: 100%;
}

/* Lista de FAQs */
.faq-list {
  max-width: 800px;
  margin: 0 auto 2rem;
}

.faq-item {
  border: 1px solid var(--border-color);
  border-radius: 0.75rem;
  margin-bottom: 1.25rem;
  background-color: var(--bg-color);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.4s ease;
  overflow: hidden;
}

.faq-item:last-child {
  margin-bottom: 0;
}

.faq-item:hover {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
  border-color: #ced4da;
}

.faq-item.active {
  border-color: var(--primary-color);
  box-shadow: 0 8px 16px rgba(0, 133, 255, 0.1);
}

.faq-item.active .faq-question {
  border-bottom: 1px solid var(--bg-light);
  padding-bottom: 2rem;
}

.faq-item.active .faq-question h3 {
  color: var(--primary-color);
}

.faq-item.active .faq-icon {
  background-color: var(--primary-color);
  color: white;
  transform: rotate(0deg);
}

.faq-question {
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font-family: inherit;
  transition: all 0.3s ease;
  position: relative;
}

.faq-question:hover {
  background-color: rgba(0, 133, 255, 0.03);
}

.faq-question h3 {
  font-size: 1.125rem;
  margin: 0;
  color: var(--text-color);
  font-weight: 600;
  transition: color 0.3s ease;
  padding-right: 2.5rem;
}

.faq-question .faq-icon {
  width: 32px;
  height: 32px;
  min-width: 32px;
  background-color: var(--bg-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
  position: absolute;
  right: 1.5rem;
}

.faq-question .faq-icon svg {
  width: 20px;
  height: 20px;
  color: var(--text-light);
  transition: all 0.3s ease;
}

.faq-answer {
  background-color: rgba(0, 133, 255, 0.02);
  overflow: hidden;
  animation: slideDown 0.3s ease-out;
  padding-top: 0.75rem;
}

.answer-content {
  padding: 0.75rem 1.5rem 1.5rem 3rem;
  animation: fadeIn 0.5s ease;
}

.answer-content p {
  color: var(--text-light);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.5rem;
}

.answer-content p:last-child {
  margin-bottom: 0;
}

.answer-content p a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.answer-content p a:hover {
  text-decoration: underline;
}

.answer-content .faq-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.answer-content .faq-actions .btn {
  padding: 0.625rem 1.25rem;
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
}

.answer-content .faq-actions .btn.btn-primary {
  background-color: var(--primary-color);
  color: white;
  box-shadow: 0 4px 6px rgba(0, 133, 255, 0.2);
  border: none;
}

.answer-content .faq-actions .btn.btn-primary:hover {
  background-color: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0, 133, 255, 0.3);
}

.answer-content .faq-actions .btn.btn-outline {
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.answer-content .faq-actions .btn.btn-outline:hover {
  background-color: rgba(0, 133, 255, 0.05);
  transform: translateY(-2px);
}

/* Botão Ver Todos */
.faq-view-all {
  text-align: center;
  margin-top: 2rem;
}

.faq-view-all .btn-text {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

.faq-view-all .btn-text svg {
  transition: transform 0.3s ease;
}

.faq-view-all .btn-text:hover {
  background-color: rgba(0, 133, 255, 0.05);
  transform: translateY(-2px);
}

.faq-view-all .btn-text:hover svg {
  transform: translateX(5px);
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

@keyframes slideDown {
  from {
    max-height: 0;
    opacity: 0;
  }
  to {
    max-height: 1000px;
    opacity: 1;
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
@media (max-width: 768px) {
  .faq-categories {
    flex-direction: row;
    overflow-x: auto;
    justify-content: flex-start;
    padding-bottom: 0.5rem;
    margin-left: -1rem;
    margin-right: -1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    scroll-snap-type: x mandatory;
  }

  .faq-categories .category-button {
    min-width: max-content;
    scroll-snap-align: start;
  }

  .faq-question h3 {
    font-size: 1rem;
  }

  .answer-content {
    padding: 0.75rem 1.25rem 1.25rem 1.25rem;
  }
}

@media (max-width: 576px) {
  .faq-question {
    padding: 1.25rem;
  }

  .faq-question .faq-icon {
    right: 1rem;
    width: 28px;
    height: 28px;
    min-width: 28px;
  }

  .faq-categories {
    margin-bottom: 1.5rem;
  }

  .faq-categories .category-button {
    padding: 0.625rem 1rem;
    font-size: 0.875rem;
  }
}
</style>
