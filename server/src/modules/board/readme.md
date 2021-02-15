# BOARD API

## GET

```typescript
'http://localhost:3000/boards' | response will be all boards |

'http://localhost:3000/boards/:id' | response will be one board |

PARAMS where
  id: String
```

## POST

```typescript
'http://localhost:3000/boards/create' | response will be created board |

BODY where
  title: String | Empty
```

## PUT

```typescript
'http://localhost:3000/boards/:id/update' | response will be one updated board |

PARAMS where
  id: String

BODY where
  title: String | Empty
  lists: List of Tasklist | Empty
```

## DELETE

```typescript
'http://localhost:3000/boards/:id/delete' | response will be one deleted board |

PARAMS where
  id: String
```
