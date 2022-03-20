<?php

namespace App\Scopes;

use Statamic\Query\Scopes\Scope;

class Stories extends Scope {
  /**
   * Apply the scope.
   *
   * @param \Statamic\Query\Builder $query
   * @param array $values
   * @return void
   */
  public function apply($query, $values) {
    // Age Filter
    $from_age = $values->get("filter_from_age");
    $to_age = $values->get("filter_to_age");

    if ($from_age != null && $to_age != null) {
      $query->where("age", ">=", $from_age)->where("age", "<=", $to_age);
    } else if ($from_age != null) {
        $query->where("age", ">=", $from_age);
    } else if ($to_age != null) {
        $query->where("age", "<=", $to_age);
    }

    // Favorites Filter
    $favorites = $values->get("filter_favorites");
    if ($favorites != null) {
      $query->whereIn("id", $favorites);
    }
  }
}
