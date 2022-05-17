const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', imgUrl: 'resources/package-1.jpg' },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', imgUrl: 'resources/package-2.jpg' },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', imgUrl: 'resources/package-3.jpg' },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', imgUrl: 'resources/package-4.jpg' },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', imgUrl: 'resources/package-5.jpg' },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', imgUrl: 'resources/package-6.jpg' },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', imgUrl: 'resources/package-7.jpg' }]

console.log(packages[0].imgUrl);