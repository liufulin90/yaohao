export const TREE = {
  key: 'top',
  title: '您户口所在地',
  data: [{
    key: 'TREE_01',
    value: '成都户口'
  }, {
    key: 'TREE_02',
    value: '非成都户口'
  }]
}

export const TREE_01 = {
  parent: '成都户口',
  title: '家庭情况',
  data: [{
    key: 'TREE_01_01',
    value: '末婚/丧偶单身家庭'
  }, {
    key: 'TREE_01_02',
    value: '离异家庭'
  }, {
    key: 'TREE_01_03',
    value: '2人及以上家庭'
  }, {
    key: 'TREE_01_04',
    value: '父母投靠子女入户家庭',
    lastData: '不具有成都市购房资格',
    lastRole: true
  }]
}

export const TREE_01_01 = {
  parent: '末婚/丧偶单身家庭',
  title: '有无房产',
  data: [{
    key: 'TREE_01_01_01',
    value: '无自有产权住房'
  }, {
    key: 'TREE_01_01_02',
    value: '有1套及以上自有产权住房',
    lastData: '可购买远郊县住房'
  }]
}
export const TREE_01_01_01 = {
  parent: '无自有产权住房',
  title: '落户成都的情况',
  data: [{
    key: 'TREE_01_01_01_01',
    value: '户口已满2年'
  }, {
    key: 'TREE_01_01_01_02',
    value: '户口未满2年'
  }]
}

export const TREE_01_01_01_01 = {
  parent: '户口已满2年',
  title: '户口区域',
  data: [{
    key: 'TREE_01_01_01_01_01',
    value: '高新南区户口',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_01_01_01_01_02',
    value: '天府新区户口',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_01_01_01_01_03',
    value: '11区户口',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_01_01_01_01_04',
    value: '远郊县户口',
    lastData: '可购买远郊县住房'
  }]
}
export const TREE_01_01_01_02 = {
  parent: '户口未满2年',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_01_01_01_02_01',
    value: '有成都市连续12个月社保',
    lastData: '可购买社保缴纳所在区域住房'
  }, {
    key: 'TREE_01_01_01_02_02',
    value: '无成都市连续12个月社保',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02 = {
  parent: '离异家庭',
  title: '离异年数',
  data: [{
    key: 'TREE_01_02_01',
    value: '离异满2年'
  }, {
    key: 'TREE_01_02_02',
    value: '离异未满2年'
  }]
}

export const TREE_01_02_01 = {
  parent: '离异满2年',
  title: '是否带未成年子女',
  data: [{
    key: 'TREE_01_02_01_01',
    value: '不带未成年子女'
  }, {
    key: 'TREE_01_02_01_02',
    value: '带有未成年子女'
  }]
}

export const TREE_01_02_01_01 = {
  parent: '不带未成年子女',
  title: '有无房产情况',
  data: [{
    key: 'TREE_01_02_01_01_01',
    value: '无自有产权住房'
  }, {
    key: 'TREE_01_02_01_01_02',
    value: '有1套及以上自有产权住房',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_01_01_01 = {
  parent: '无自有产权住房',
  title: '落户成都的情况',
  data: [{
    key: 'TREE_01_02_01_01_01_01',
    value: '户口已满2年'
  }, {
    key: 'TREE_01_02_01_01_01_02',
    value: '户口未满2年'
  }]
}

export const TREE_01_02_01_01_01_01 = {
  parent: '户口已满2年',
  title: '户口区域',
  data: [{
    key: 'TREE_01_02_01_01_01_01_01',
    value: '高新南区户口',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_01_02_01_01_01_01_02',
    value: '天府新区户口',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_01_02_01_01_01_01_03',
    value: '11区户口',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_01_02_01_01_01_01_04',
    value: '远郊县户口',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_01_01_01_02 = {
  parent: '户口未满2年',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_01_02_01_01_01_02_01',
    value: '有成都市连续12个月社保',
    lastData: '可购买社保缴纳所在区域住房'
  }, {
    key: 'TREE_01_02_01_01_01_02_02',
    value: '无成都市连续12个月社保',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_01_02 = {
  parent: '带有未成年子女',
  title: '拥有房产数量',
  data: [{
    key: 'TREE_01_02_01_02_01',
    value: '有2套及以上自有产权住房',
    lastData: '可购买远郊县住房'
  }, {
    key: 'TREE_01_02_01_02_02',
    value: '有1套有以下自有产权住房'
  }]
}
export const TREE_01_02_01_02_02 = {
  parent: '有1套有以下自有产权住房',
  title: '落户成都的情况',
  data: [{
    key: 'TREE_01_02_01_02_02_01',
    value: '户口已满2年'
  }, {
    key: 'TREE_01_02_01_02_02_02',
    value: '户口未满2年'
  }]
}

export const TREE_01_02_01_02_02_01 = {
  parent: '户口已满2年',
  title: '户口区域',
  data: [{
    key: 'TREE_01_02_01_02_02_01_01',
    value: '高新南区户口',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_01_02_01_02_02_01_02',
    value: '天府新区户口',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_01_02_01_02_02_01_03',
    value: '11区户口',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_01_02_01_02_02_01_04',
    value: '远郊县户口',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_01_02_02_02 = {
  parent: '户口未满2年',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_01_02_01_02_02_02_01',
    value: '有成都市连续12个月社保',
    lastData: '可购买社保缴纳所在区域住房'
  }, {
    key: 'TREE_01_02_01_02_02_02_02',
    value: '无成都市连续12个月社保',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_02 = {
  parent: '离异未满2年',
  title: '是否带有未成年子女',
  data: [{
    key: 'TREE_01_02_02_01',
    value: '带有未成年子女'
  }, {
    key: 'TREE_01_02_02_02',
    value: '不带未成年子女'
  }]
}

export const TREE_01_02_02_01 = {
  parent: '带有未成年子女',
  title: '拥有房产数量',
  data: [{
    key: 'TREE_01_02_02_01_01',
    value: '离异前家庭有2套及以上 自有产权住房',
    lastData: '可购买远郊县住房'
  }, {
    key: 'TREE_01_02_02_01_02',
    value: '离异前家庭有1套及以下自有产权住房'
  }]
}
export const TREE_01_02_02_01_02 = {
  parent: '离异前家庭有1套及以下自有产权住房',
  title: '落户成都的情况',
  data: [{
    key: 'TREE_01_02_02_01_02_01',
    value: '户口已满2年'
  }, {
    key: 'TREE_01_02_02_01_02_02',
    value: '户口未满2年'
  }]
}

export const TREE_01_02_02_01_02_01 = {
  parent: '户口已满2年',
  title: '户口区域',
  data: [{
    key: 'TREE_01_02_02_01_02_01_01',
    value: '高新南区户口',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_01_02_02_01_02_01_02',
    value: '天府新区户口',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_01_02_02_01_02_01_03',
    value: '11区户口',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_01_02_02_01_02_01_04',
    value: '远郊县户口',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_02_01_02_02 = {
  parent: '户口未满2年',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_01_02_02_01_02_02_01',
    value: '有成都市连续12个月社保',
    lastData: '可购买社保缴纳所在区域住房'
  }, {
    key: 'TREE_01_02_02_01_02_02_02',
    value: '无成都市连续12个月社保',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_02_02 = {
  parent: 'TREE_01_02_02_02',
  title: '拥有房产数量',
  data: [{
    key: 'TREE_01_02_02_02_01',
    value: '离异前家庭有1套及以上 自有产权住房',
    lastData: '可购买远郊县住房'
  }, {
    key: 'TREE_01_02_02_02_02',
    value: '离异前家庭有无自有产权住房'
  }]
}
export const TREE_01_02_02_02_02 = {
  parent: '离异前家庭有1套及以下自有产权住房',
  title: '落户成都的情况',
  data: [{
    key: 'TREE_01_02_02_02_02_01',
    value: '户口已满2年'
  }, {
    key: 'TREE_01_02_02_02_02_02',
    value: '户口未满2年'
  }]
}

export const TREE_01_02_02_02_02_01 = {
  parent: '户口已满2年',
  title: '户口区域',
  data: [{
    key: 'TREE_01_02_02_02_02_01_01',
    value: '高新南区户口',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_01_02_02_02_02_01_02',
    value: '天府新区户口',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_01_02_02_02_02_01_03',
    value: '11区户口',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_01_02_02_02_02_01_04',
    value: '远郊县户口',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_02_02_02_02_02 = {
  parent: '户口未满2年',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_01_02_02_02_02_02_01',
    value: '有成都市连续12个月社保',
    lastData: '可购买社保缴纳所在区域住房'
  }, {
    key: 'TREE_01_02_02_02_02_02_02',
    value: '无成都市连续12个月社保',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_03 = {
  parent: '2人及以上家庭',
  title: '有无房产',
  data: [{
    key: 'TREE_01_03_01',
    value: '有2套及以上自有产权住房',
    lastData: '可购买远郊县住房'
  }, {
    key: 'TREE_01_03_02',
    value: '有1套有以下自有产权住房'
  }]
}

export const TREE_01_03_02 = {
  parent: '有1套有以下自有产权住房',
  title: '落户成都的情况',
  data: [{
    key: 'TREE_01_03_02_01',
    value: '户口已满2年'
  }, {
    key: 'TREE_01_03_02_02',
    value: '户口未满2年'
  }]
}

export const TREE_01_03_02_01 = {
  parent: '户口已满2年',
  title: '户口区域',
  data: [{
    key: 'TREE_01_03_02_01_01',
    value: '高新南区户口',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_01_03_02_01_02',
    value: '天府新区户口',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_01_03_02_01_03',
    value: '11区户口',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_01_03_02_01_04',
    value: '远郊县户口',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_01_03_02_02 = {
  parent: '户口未满2年',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_01_03_02_02_01',
    value: '有成都市连续12个月社保',
    lastData: '可购买社保缴纳所在区域住房'
  }, {
    key: 'TREE_01_03_02_02_02',
    value: '无成都市连续12个月社保',
    lastData: '可购买远郊县住房'
  }]
}

// 非成都
export const TREE_02 = {
  parent: '非成都户口',
  title: '连续缴纳社保情况',
  data: [{
    key: 'TREE_02_01',
    value: '连续缴纳成都市社保12个月以下',
    lastData: '暂无具有成都市购房资格',
    lastRole: true
  }, {
    key: 'TREE_02_02',
    value: '连续缴纳成都市社保12-24个月',
    lastData: '可购买远郊县住房'
  }, {
    key: 'TREE_02_03',
    value: '连续缴纳成都市社保24个月及以上'
  }]
}

export const TREE_02_03 = {
  parent: '连续缴纳成都市社保24个月及以上',
  title: '是否离异',
  data: [{
    key: 'TREE_02_03_01',
    value: '非离异家庭'
  }, {
    key: 'TREE_02_03_02',
    value: '离异家庭'
  }]
}

export const TREE_02_03_01 = {
  parent: '非离异家庭',
  title: '是否有成都房产',
  data: [{
    key: 'TREE_02_03_01_01',
    value: '家庭在成都市无自有产权住房'
  }, {
    key: 'TREE_02_03_01_02',
    value: '家庭在成都市有自有产权住房',
    lastData: '可购买远郊县住房'
  }]
}
export const TREE_02_03_01_01 = {
  parent: '家庭在成都市无自有产权住房',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_02_03_01_01_01',
    value: '社保缴纳在高新南区',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_02_03_01_01_02',
    value: '社保缴纳天府新区',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_02_03_01_01_03',
    value: '社保缴纳在11区',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_02_03_01_01_04',
    value: '社保缴纳在远郊县',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_02_03_02 = {
  parent: '离异家庭',
  title: '离异年数',
  data: [{
    key: 'TREE_02_03_02_01',
    value: '离异满2年'
  }, {
    key: 'TREE_02_03_02_02',
    value: '离异未满2年'
  }]
}

export const TREE_02_03_02_01 = {
  parent: '离异满2年',
  title: '是否有成都房产',
  data: [{
    key: 'TREE_02_03_02_01_01',
    value: '现在家庭在成都市无自有产权住房'
  }, {
    key: 'TREE_02_03_02_01_02',
    value: '现在家庭在成都市有自有产权住房',
    lastData: '可购买远郊县住房'
  }]
}
export const TREE_02_03_02_01_01 = {
  parent: '现在家庭在成都市无自有产权住房',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_02_03_02_01_01_01',
    value: '社保缴纳在高新南区',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_02_03_02_01_01_02',
    value: '社保缴纳天府新区',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_02_03_02_01_01_03',
    value: '社保缴纳在11区',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_02_03_02_01_01_04',
    value: '社保缴纳在远郊县',
    lastData: '可购买远郊县住房'
  }]
}

export const TREE_02_03_02_02 = {
  parent: '离异未满2年',
  title: '是否有成都房产',
  data: [{
    key: 'TREE_02_03_02_02_01',
    value: '离异前家庭在成都市无自有产权住房'
  }, {
    key: 'TREE_02_03_02_02_02',
    value: '离异前家庭在成都市有自有产权住房',
    lastData: '可购买远郊县住房'
  }]
}
export const TREE_02_03_02_02_01 = {
  parent: '离异前家庭在成都市无自有产权住房',
  title: '缴纳社保情况',
  data: [{
    key: 'TREE_02_03_02_02_01_01',
    value: '社保缴纳在高新南区',
    lastData: '可购买高新南区+远郊县住房'
  }, {
    key: 'TREE_02_03_02_02_01_02',
    value: '社保缴纳天府新区',
    lastData: '可购买天府新区+远郊县住房'
  }, {
    key: 'TREE_02_03_02_02_01_03',
    value: '社保缴纳在11区',
    lastData: '可购买11区+远郊县住房'
  }, {
    key: 'TREE_02_03_02_02_01_04',
    value: '社保缴纳在远郊县',
    lastData: '可购买远郊县住房'
  }]
}
