// RAWGraphs 国际化字典
// 支持语言: zh-CN (简体中文), en-US (英文原版)

export const locales = {
  'zh-CN': {
    brand: 'RAWGraphs',

    // App.js 五大步骤标题
    steps: {
      load: '1. 加载你的数据',
      chart: '2. 选择图表',
      mapping: '3. 字段映射',
      customize: '4. 自定义样式',
      export: '5. 导出',
    },

    // 通用按钮/标签
    common: {
      reset: '重置',
      cancel: '取消',
      changeData: '更换数据',
      download: '下载',
      load: '加载数据',
      run: '执行查询',
      continue: '继续',
      browse: '浏览',
    },

    // ScreenSizeAlert
    screenSizeAlert: {
      welcome: '欢迎使用 RAWGraphs',
      bigScreen: '建议使用更大屏幕访问',
      resize: '请调整浏览器窗口大小，或稍后再来访问。',
      touchNotSupported: '触屏设备尚不完全支持。',
      gotIt: '我知道了',
    },

    // DataLoader
    dataLoader: {
      paste: '粘贴数据',
      upload: '上传数据',
      samples: '使用示例数据',
      sparql: 'SPARQL 查询',
      url: '通过 URL 加载',
      project: '打开项目',
      pasteHint: '从其他应用或网站复制并粘贴您的数据……',
      uploadHint: '支持加载表格（TSV、CSV、DSV）或 JSON 数据。',
      sparqlHint: '通过 SPARQL 查询加载数据',
      urlHint: '输入一个网址（URL）来加载远程数据文件。',
      projectHint: '加载一个 .rawgraphs 项目文件。',
      dropHere: '将文件拖到此处或 [浏览] 本机文件',
      allAccepted: '所有文件均可接受',
      someRejected: '部分文件将被拒绝',
      endpointPlaceholder: '请输入 SPARQL 端点地址',
      queryPlaceholder: '请输入查询语句',
      loadError: '加载失败：',
      sparqlError: '无法在指定端点上执行查询',
      parseError: '解析错误，请检查第 {row} 行第 {column} 列。',
      anotherIssue: '还存在以下问题：',
      remainingRows: '其余 {n} 行无问题。',
      parseSuccess: '已成功解析 {n} 行（{m} 个单元格），可以开始选择图表了！',
    },

    // DataMismatchModal
    dataMismatch: {
      title: '警告：解析错误 / 缺失字段 / 数据类型不匹配',
      errorParsing: '解析新数据时出错。',
      errorHint: '您可以加载新数据并尝试修复错误，或返回之前加载的数据。',
      missingDimension: '当前项目的字段映射需要维度 {dim}，但在新数据中未找到。',
      typeMismatch: '项目原有数据类型无法应用于新数据。',
      loadNewData: '加载新数据',
    },

    // ChartSelector
    chartSelector: {
      show: '显示',
      allCharts: '全部图表',
      code: '代码',
      tutorial: '教程',
      loadCustom: '加载自定义图表',
    },

    // ParsingOptions
    parsingOptions: {
      parsingTitle: '数据解析选项',
      transformTitle: '数据转换',
      columnSep: '列分隔符',
      thousandsSep: '千位分隔符',
      decimalsSep: '小数分隔符',
      dateLocale: '日期区域',
      stackOn: '堆叠方式',
      refreshUrl: '从 URL 刷新数据',
      refreshQuery: '从查询刷新数据',
      refresh: '刷新数据',
      doNotStack: '不堆叠',
      column: '列',
      fromD3: '参考 d3-time-format',
    },

    // DataMapping
    dataMapping: {
      dimensions: '数据维度',
      chartVariables: '图表变量',
    },

    // ChartOptions
    chartOptions: {
      artboard: '画布',
      legendHint: '画布 {width}px × {height}px（包含图例）',
    },

    // ChartPreview
    chartPreview: {
      requiredVars: '请配置必要的图表变量',
      needMapXY: '需要映射的图表变量：请将字段绑定到 X 和 Y',
      pleaseMap: '请至少在 X 和 Y 上绑定 {n} 个维度。',
      typeMismatch: '数据类型不匹配：无法将 {type} 类型映射到 {variable}。',
      chartError: '图表渲染错误：',
    },

    // Exporter
    exporter: {
      svg: 'SVG 矢量图',
      png: 'PNG 图片',
      jpg: 'JPG 图片',
      rawgraphs: 'RAWGraphs 项目',
    },

    // CustomChartLoader
    customChartLoader: {
      title: '加载自定义图表',
      fromFile: '从文件加载',
      fromUrl: '从 URL 导入',
      fromNpm: '从 NPM 导入',
      submit: '加载图表',
      npmPlaceholder: '从 NPM 加载 UMD/AMD JS 包',
      urlPlaceholder: '从 URL 加载 UMD/AMD JS 文件',
      dropHere: '将文件拖到此处或 [浏览] 本机文件',
      error: '自定义图表导入失败',
      docs: '了解如何创建自定义图表？请查看文档',
    },

    // CustomChartWarnModal
    customChartWarn: {
      title: '警告！',
      body: '即将执行第三方 JavaScript 脚本，请自行评估风险。',
      dontExecute: '取消执行',
      continue: '继续',
    },

    // CopyToClipboardButton
    copyToClipboard: {
      copy: '复制到剪贴板',
      copied: '已复制',
    },

    // WarningMessage
    warningMessage: {
      default: '默认警告信息。',
    },
  },

  // ============================================================
  // 英文原版（兜底）
  // ============================================================
  'en-US': {
    brand: 'RAWGraphs',

    steps: {
      load: '1. Load your data',
      chart: '2. Choose a chart',
      mapping: '3. Mapping',
      customize: '4. Customize',
      export: '5. Export',
    },

    common: {
      reset: 'Reset',
      cancel: 'Cancel',
      changeData: 'Change data',
      download: 'Download',
      load: 'Load data',
      run: 'Run query',
      continue: 'Continue',
      browse: 'Browse',
    },

    screenSizeAlert: {
      welcome: 'Welcome to the new RAWGraphs!',
      bigScreen: 'RAWGraphs 2.0 is designed for bigger screens!',
      resize: 'Resize your browser window or send yourself a reminder to come back at a better time.',
      touchNotSupported: 'Touch devices are not fully supported yet.',
      gotIt: 'Got it!',
    },

    dataLoader: {
      paste: 'Paste your data',
      upload: 'Upload your data',
      samples: 'Try our data samples',
      sparql: 'SPARQL query',
      url: 'From URL',
      project: 'Open your project',
      pasteHint: 'Copy and paste your data from other applications or websites...',
      uploadHint: 'You can load tabular (TSV, CSV, DSV) or JSON data.',
      sparqlHint: 'Load data with a SparQL query',
      urlHint: 'Enter a web address (URL) to load remote data.',
      projectHint: 'Load a .rawgraphs project.',
      dropHere: 'Drag a file here or [Browse] a file from your computer',
      allAccepted: 'All files will be accepted',
      someRejected: 'Some files will be rejected',
      endpointPlaceholder: 'Write your SPARQL Endpoint here',
      queryPlaceholder: 'Write your query here',
      loadError: 'Loading error. ',
      sparqlError: 'It was not possible to execute the query on the given endpoint',
      parseError: 'Ops, please check row {row} at column {column}.',
      anotherIssue: "There's another issue at row...",
      remainingRows: 'The remaining {n} rows look fine.',
      parseSuccess: '{n} rows ({m} cells) have been successfully parsed, now you can choose a chart!',
    },

    dataMismatch: {
      title: 'Warning: parsing error / missing column / data-type mismatch',
      errorParsing: 'There was an error while parsing new data.',
      errorHint: 'You can load the new data and try to fix the error or return to the data previously loaded.',
      missingDimension: "The data mapping of this project requires the dimension {dim}, that we can't find in the new data.",
      typeMismatch: "The data-types previously set for this project can't be applied to the new data.",
      loadNewData: 'Load new data',
    },

    chartSelector: {
      show: 'Show',
      allCharts: 'All charts',
      code: 'Code',
      tutorial: 'Tutorial',
      loadCustom: 'Load custom chart',
    },

    parsingOptions: {
      parsingTitle: 'DATA PARSING OPTIONS',
      transformTitle: 'DATA TRANSFORMATION',
      columnSep: 'Column separator',
      thousandsSep: 'Thousands separator',
      decimalsSep: 'Decimals separator',
      dateLocale: 'Date Locale',
      stackOn: 'Stack on',
      refreshUrl: 'Refresh data from url',
      refreshQuery: 'Refresh data from query',
      refresh: 'Refresh data',
      doNotStack: 'Do not stack',
      column: 'Column',
      fromD3: 'from d3-time-format',
    },

    dataMapping: {
      dimensions: 'Dimensions',
      chartVariables: 'Chart Variables',
    },

    chartOptions: {
      artboard: 'artboard',
      legendHint: '{width}px * {height}px including the legend.',
    },

    chartPreview: {
      requiredVars: 'Required chart variables',
      needMapXY: 'Required chart variables: you need to map X and Y',
      pleaseMap: 'Please map at least {n} dimensions on X and Y.',
      typeMismatch: "Data-type mismatch: you can't map {type}s on {variable}.",
      chartError: 'Chart error. ',
    },

    exporter: {
      svg: 'svg',
      png: 'png',
      jpg: 'jpg',
      rawgraphs: 'rawgraphs',
    },

    customChartLoader: {
      title: 'Load custom chart',
      fromFile: 'Load from file',
      fromUrl: 'Import from URL',
      fromNpm: 'Import from NPM',
      submit: 'Load your chart',
      npmPlaceholder: 'Load UMD or AMD JS File from NPM',
      urlPlaceholder: 'Load UMD or AMD JS File from URL',
      dropHere: 'Drag a file here or [Browse] a file from your computer',
      error: 'Error during custom chart import',
      docs: 'Do you want to know how to create a custom chart? Check our documentation',
    },

    customChartWarn: {
      title: 'Warning!',
      body: 'You are about to execute third party JavaScript continue at your own risk.',
      dontExecute: "Don't execute",
      continue: 'Continue',
    },

    copyToClipboard: {
      copy: 'Copy to clipboard',
      copied: 'Copied to clipboard',
    },

    warningMessage: {
      default: 'A default warning message.',
    },
  },
};

export const defaultLocale = 'zh-CN';
