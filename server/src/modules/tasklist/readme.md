# TASKLIST API

## GET

```typescript
'http://localhost:3000/tasklists' | response will be all tasklists |

'http://localhost:3000/tasklists/:id' | response will be one tasklist |

PARAMS where
  id: String
```

## POST

```typescript
'http://localhost:3000/tasklists/create' | response will be created tasklist |

BODY where
  title: String | Empty
  boardId: String | Empty
```

## PUT

```typescript
'http://localhost:3000/tasklists/:id/update' | response will be one updated tasklist |

PARAMS where
  id: String

BODY where
  title: String | Empty
```

## DELETE

```typescript
'http://localhost:3000/tasklists/:id/delete' | response will be one deleted tasklist |

PARAMS where
  id: String
```
