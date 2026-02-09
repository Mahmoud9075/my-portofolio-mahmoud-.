# Portfolio Animations Documentation

## الأنيميشنات المضافة / Added Animations

تم إضافة أنيميشنات احترافية وسلسة لمشروع المحفظة الشخصية. إليك قائمة كاملة بالأنيميشنات:

### 1. **Text Slide Animations** (أنيميشن انزلاق النصوص)

#### RTL/LTR Direction Based
- **العربية (Arabic)**: النصوص تنزلق من **اليمين إلى اليسار** 
- **الإنجليزية (English)**: النصوص تنزلق من **اليسار إلى اليمين**

#### Keyframes:
- `slide-in-right`: تنزلق من اليمين مع opacity fade
- `slide-in-left`: تنزلق من اليسار مع opacity fade

#### Utility Classes:
```css
.anim-slide-in-right       /* انزلاق من اليمين */
.anim-slide-in-right-1/2/3 /* مع تأخير متتالي */
.anim-slide-in-left        /* انزلاق من اليسار */
.anim-slide-in-left-1      /* مع تأخير */
```

**المستخدمة في**: 
- Hero Section - العناوين الرئيسية
- Navbar - أسماء العلامة التجارية والروابط

---

### 2. **Scroll Reveal Animations** (أنيميشن ظهور العناصر عند الـ Scroll)

عند scroll الصفحة، تظهر العناصر واحدة تلو الأخرى مع animation سلسة.

#### Keyframes:
```css
@keyframes scroll-reveal {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

#### Utility Classes:
```css
.anim-reveal       /* أساسي بدون تأخير */
.anim-reveal-1/2/3/4 /* مع تأخير متتالي */
```

#### Duration & Timing:
- المدة: `0.8s`
- Easing: `ease-out`
- التأخير بين العناصر: `0.08s - 0.12s`

**المستخدمة في**:
- About Section - العنوان والبطاقات
- Skills Section - العنوان والمهارات
- Education Section - العنوان والتعليم
- Projects Section - العنوان والمشاريع
- Contact Section - العنوان والنماذج والروابط
- Footer - جميع العناصر

---

### 3. **Hook: useScrollReveal**

Custom React hook يستخدم Intersection Observer API لتطبيق animations على العناصر عند ظهورها في viewport.

```javascript
// الاستخدام
const ref = useScrollReveal();

<div ref={ref} className="opacity-0 anim-reveal">
  Content here...
</div>
```

**الميزات**:
- يستخدم Intersection Observer (أداء عالي)
- قابل للتخصيص (threshold)
- يكتشف تلقائياً عند ظهور العنصر

---

### 4. **Component: TextAnimationWrapper**

مكون React لتطبيق animations النصوص بناءً على اللغة الحالية.

```javascript
<TextAnimationWrapper 
  delay={0.1}
  useSlideAnimation={true}
>
  النص الخاص بك
</TextAnimationWrapper>
```

**الميزات**:
- اختيار automatic للأنيميشن حسب اللغة
- تأخير قابل للتخصيص
- يمكن تعطيل الأنيميشن

---

### 5. **Component: ScrollRevealItem**

مكون wrapper لتطبيق scroll reveal بسهولة.

```javascript
<ScrollRevealItem delay={0.1}>
  محتوى
</ScrollRevealItem>
```

---

## CSS Custom Properties المضافة

```css
/* Slide Animations */
--animate-slide-in-right: slide-in-right 0.8s ease-out forwards;
--animate-slide-in-left: slide-in-left 0.8s ease-out forwards;
--animate-slide-in-right-delay-1/2/3: (مع تأخير)

/* Scroll Reveal */
--animate-scroll-reveal: scroll-reveal 0.8s ease-out forwards;
--animate-scroll-reveal-delay-1/2/3/4: (مع تأخير)
```

---

## Timing و Performance

### Animation Duration
- Text Animations: **0.8s**
- Scroll Reveal: **0.8s**

### Stagger Delays
- Navbar Links: `0.08s` بين كل عنصر
- Skills: `0.08s` بين كل مهارة
- Education: `0.12s` بين كل عنصر
- Projects: `0.1s` بين كل مشروع
- Contact Info: `0.08s` بين كل عنصر

### Performance Tips
✅ استخدام `opacity` و `transform` فقط (GPU accelerated)
✅ استخدام `forwards` في الـ animation-fill-mode
✅ Intersection Observer للـ scroll animations (efficient)

---

## كيفية الاستخدام

### لإضافة scroll reveal animation:
```jsx
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const MyComponent = () => {
  const ref = useScrollReveal();
  
  return (
    <div ref={ref} className="opacity-0 anim-reveal">
      محتوى يظهر عند scroll
    </div>
  );
};
```

### لإضافة text slide animation:
```jsx
import { TextAnimationWrapper } from "@/components/TextAnimationWrapper";
import { useLang } from "@/i18n";

export const MyComponent = () => {
  const { lang } = useLang();
  
  return (
    <TextAnimationWrapper delay={0.1}>
      النص الخاص بك
    </TextAnimationWrapper>
  );
};
```

---

## ملاحظات مهمة

1. **opacity: 0** في الـ initial state مهم جداً للـ animations
2. **animationDelay** inline style يتم تطبيقها ديناميكياً
3. **Intersection Observer** يساعد في performance على الصفحات الطويلة
4. جميع الـ animations تدعم Light و Dark mode

---

## Browser Support

- ✅ Chrome/Edge 51+
- ✅ Firefox 55+
- ✅ Safari 12.1+
- ✅ iOS Safari 12.2+

---

## الملفات المعدلة

- `src/index.css` - إضافة keyframes و utility classes
- `src/components/*.jsx` - إضافة animations
- `src/hooks/useScrollReveal.js` - custom hook جديد
- `src/components/TextAnimationWrapper.jsx` - مكون جديد
- `src/components/ScrollRevealItem.jsx` - مكون جديد

---

## اختبار الأنيميشنات

للتأكد من أن الأنيميشنات تعمل بشكل صحيح:
1. افتح المشروع على `http://localhost:5173/`
2. انظر إلى الـ Hero section - يجب أن تظهر النصوص مع انزلاق
3. اسحب الصفحة لأسفل - جميع العناصر يجب أن تظهر مع animation
4. غيّر اللغة - الأنيميشنات يجب أن تتكيف مع اتجاه النص

---

## نصائح للتطوير

إذا أردت تعديل الأنيميشنات:

1. **تغيير المدة**: عدّل `0.8s` في `src/index.css`
2. **تغيير التأخير**: عدّل `delay` في الـ components
3. **تغيير الـ easing**: غيّر `ease-out` إلى `ease-in-out` أو `linear`
4. **إضافة أنيميشن جديد**: أضفها في `@theme` في `src/index.css`

---

تم إنشاء هذه الوثائق في: **8 فبراير 2026**
