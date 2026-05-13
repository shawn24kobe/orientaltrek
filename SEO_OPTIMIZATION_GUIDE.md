# SEO优化指南 - Foshan Furniture

## 已完成的SEO优化

### 1. Sitemap.xml
- ✅ 已创建 `sitemap.xml` 文件
- 包含所有主要页面
- 优先级设置：
  - 首页 (/)：1.0 (最高)
  - 产品页：0.9
  - 其他页面：0.7-0.8
- 更新频率标记：weekly/monthly

### 2. Robots.txt
- ✅ 已创建 `robots.txt` 文件
- 允许所有搜索引擎爬取网站
- 指向sitemap.xml位置

### 3. Meta标签优化
已为所有页面添加以下SEO元素：

#### 首页 (index.html)
- **Title**: Foshan Furniture | Oriental Modern Furniture - Factory Direct
- **Description**: Premium oriental modern furniture from Foshan, China. Direct from factory. Custom designs for hotels, resorts, and residential projects. 80+ countries exported.
- **Keywords**: furniture, foshan furniture, oriental furniture, modern furniture, hotel furniture, custom furniture, furniture factory, wholesale furniture

#### 产品页 (products.html)
- **Title**: Products | Foshan Furniture - Premium Oriental Modern Designs
- **Description**: Browse our premium furniture collection: living room, bedroom, dining room, hotel projects, outdoor furniture and office solutions. Factory direct pricing.
- **Keywords**: furniture products, living room furniture, bedroom furniture, dining room furniture, hotel furniture, outdoor furniture, office furniture

#### 关于页 (about.html)
- **Title**: About Us | Foshan Furniture - Leading Manufacturer Since 2010
- **Description**: About Foshan Furniture. Leading manufacturer of premium oriental modern furniture since 2010. Exported to 80+ countries. Manufacturing excellence and design innovation.
- **Keywords**: furniture manufacturer, foshan factory, furniture export, oriental design, modern furniture, quality furniture, custom furniture manufacturer

#### 联系页 (contact.html)
- **Title**: Contact Us | Foshan Furniture - Get in Touch
- **Description**: Contact Foshan Furniture for custom furniture solutions and export inquiries. WhatsApp, email, WeChat. Fast response for overseas buyers.
- **Keywords**: contact furniture, furniture inquiries, custom furniture, furniture wholesale, export inquiries, furniture supplier contact

#### 集合页 (collections.html)
- **Title**: Collections | Foshan Furniture - Design Collections
- **Description**: Explore our furniture collections: New Chinese, Modern Minimalist, Luxury Baroque, Rustic Industrial, and Contemporary Scandinavian designs.

#### 展厅页 (showroom.html)
- **Title**: Showroom | Foshan Furniture - Visit Our Factory
- **Description**: Visit Foshan Furniture showrooms in Lecong and Longjiang. Explore our state-of-the-art factory and 50,000+ sqm production facilities.

#### 产品详情页 (product-detail.html)
- **Title**: Luxury Sofa | Premium Furniture - Foshan Furniture
- **Description**: Luxury Sofa - Premium Oak wood frame with upholstery. Dimensions: 220cm x 95cm x 85cm. Available for wholesale and custom orders.

### 4. 结构化数据 (Schema.org JSON-LD)
- ✅ Organization schema （组织信息）
- ✅ LocalBusiness schema （本地商业信息）
- ✅ Product schema （产品信息）
- ✅ ContactPoint schema （联系方式）

### 5. Open Graph标签
- ✅ og:title - 用于社交媒体分享
- ✅ og:description - 分享描述
- ✅ og:type - 页面类型
- ✅ og:url - 规范URL

### 6. Canonical URLs
- ✅ 所有页面都添加了 `<link rel="canonical">` 标签

---

## 向Google Search Console提交网站

### 步骤 1: 访问Google Search Console
1. 进入 https://search.google.com/search-console
2. 用Google账号登录

### 步骤 2: 添加网站
1. 点击 "资源" → "添加资源"
2. 输入你的网站URL: `https://www.orientaltrek.com`
3. 选择验证方法：
   - **推荐**: 上传HTML文件到网站根目录
   - 或使用DNS记录验证
   - 或使用Google Analytics验证

### 步骤 3: 验证域名所有权
根据选择的验证方法完成验证流程

### 步骤 4: 提交Sitemap
1. 完成验证后，进入 "Sitemaps" 部分
2. 点击 "添加新的Sitemap"
3. 输入: `sitemap.xml`
4. 点击 "提交"

### 步骤 5: 检查爬虫覆盖率
- 进入 "覆盖率" 报告
- 查看哪些页面被Google索引
- 解决任何错误或警告

### 步骤 6: 提交URL进行索引
1. 在Google Search Console中使用 "检查URL" 工具
2. 输入要立即索引的URL
3. 点击 "请求编写索引"

**建议提交以下重要URL：**
```
https://www.orientaltrek.com/
https://www.orientaltrek.com/products.html
https://www.orientaltrek.com/about.html
https://www.orientaltrek.com/contact.html
https://www.orientaltrek.com/collections.html
https://www.orientaltrek.com/showroom.html
```

---

## Bing Webmaster Tools提交 (可选)

### 步骤:
1. 访问 https://www.bing.com/webmasters
2. 点击 "添加网站"
3. 输入URL: `https://www.orientaltrek.com`
4. 选择验证方法
5. 提交Sitemap URL

---

## 其他优化建议

### 1. 改进页面内容
- [ ] 确保每个页面都有高质量、原创的内容
- [ ] 使用H1, H2, H3等标题层次结构
- [ ] 在内容中自然地包含关键词

### 2. 改进图片SEO
- [ ] 为所有图片添加有意义的 alt 文本
- [ ] 压缩图片以加快加载速度
- [ ] 使用 WebP 格式以提高性能

### 3. 改进链接
- [ ] 添加内部链接连接相关页面
- [ ] 获取高质量的外部反向链接

### 4. 改进页面速度
- [ ] 使用CDN加速内容传输
- [ ] 启用Gzip压缩
- [ ] 使用Chrome DevTools的Lighthouse检查

### 5. 移动优化
- [ ] 确保网站响应式设计
- [ ] 测试移动页面速度
- [ ] 在Mobile-Friendly Test中验证

### 6. 持续监控
- [ ] 每周检查Google Search Console报告
- [ ] 监控排名和流量
- [ ] 跟踪爬虫错误和警告

---

## 本地域名替换

当前sitemap.xml和元标签中使用了占位域名:
```
https://www.orientaltrek.com
```

**请将其替换为您的实际域名，例如：**
- 如果您的域名是 `homely.example.com`
- 则将所有 `foshan-furniture.com` 替换为 `homely.example.com`

### 批量替换方法:
使用文本编辑器的查找替换功能：
1. Ctrl+H 打开查找替换
2. 查找: `foshan-furniture.com`
3. 替换为: `你的实际域名`
4. 点击 "全部替换"

---

## 实用工具

| 工具 | 功能 | URL |
|-----|------|-----|
| Google Search Console | 监控索引、提交Sitemap | https://search.google.com/search-console |
| Google PageSpeed Insights | 检查页面速度 | https://pagespeed.web.dev/ |
| Mobile-Friendly Test | 测试移动适配 | https://search.google.com/test/mobile-friendly |
| Schema Validator | 验证结构化数据 | https://validator.schema.org/ |
| SEMrush | SEO分析工具 | https://www.semrush.com/ |
| Ahrefs | 反向链接分析 | https://ahrefs.com/ |

---

## 预期时间表

- **Sitemap提交**: 立即
- **首次爬取**: 24-48小时
- **初次索引**: 1-2周
- **排名提升**: 4-12周（取决于竞争程度）

---

**更新日期**: 2026-05-13
**网站**: Foshan Furniture
**状态**: ✅ SEO基础设置完成
