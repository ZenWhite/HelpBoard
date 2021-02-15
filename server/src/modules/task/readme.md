# TASK API

## GET

```typescript
'http://localhost:3000/tasks' | response will be all tasks |

'http://localhost:3000/tasks/:id' | response will be one task |

PARAMS where
  id: String
```

## POST

```typescript
'http://localhost:3000/tasks/create' | response will be created task |

BODY where
  title: String | Empty
  description: String | Empty
  label: String | Empty
  status: String | Empty
  tasklistId: String | Empty
```

## PUT

```typescript
'http://localhost:3000/tasks/:id/update' | response will be one updated task |

PARAMS where
  id: String

BODY where
  title: String | Empty
  description: String | Empty
  label: String | Empty
  status: String | Empty
  tasklistId: String | Empty
```

## DELETE

```typescript
'http://localhost:3000/tasks/:id/delete' | response will be one deleted task |

PARAMS where
  id: String
```
